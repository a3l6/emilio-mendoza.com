---
title: You Should Build A Homelab
date: 2026-10-05
draft: false
tags:
  - blog
  - homelab
  - tailscale
excerpt: Why you need a homelab and what I'm running
---
The past year has taught me one thing...every developer should run a home lab. Whether it's basic services like [Vaultwarden](https://github.com/dani-garcia/vaultwarden) or [Pi-hole](https://github.com/pi-hole/pi-hole/), or more advanced configurations like your own deployed services, a homelab is essential. I use my homelab every day, whether it's watching movies on my Plex server, syncing my Obsidian vaults, blocking ads with Pi-hole, or playing on my Minecraft servers. Homelabbing is a lot of fun, and hey, you might even learn some infrastructure fundamentals along the way.
## Getting Started

Homelabbing doesn't have to be expensive! I started with a Raspberry Pi and an external hard drive and gradually upgraded my setup. If you're thinking about getting started, there are a few things you need to know.

### 1. Pick what you want to run
The possibilities are endless when it comes to homelabbing. An easy service to start with is Vaultwarden. Everybody should use unique, long passwords for every account, and a password manager is a great way to store those.

While [Bitwarden](https://github.com/bitwarden) is open source, the backend is optimized for large user counts and can be too resource-intensive for a homelab. [Vaultwarden](https://github.com/dani-garcia/vaultwarden) is an open source implementation of the Bitwarden API built for homelabs. For more information on running Vaultwarden, see [here](https://github.com/dani-garcia/vaultwarden#usage).

For any other services, I recommend using Docker Compose to manage different services. This is going to be the simplest way to set up the vast majority of services. Bonus: it's also a great technology to put on your résumé.

### 2. DON'T EXPOSE YOUR SERVICES
The biggest mistake people make in their homelab is to expose their services to the public and open ports on their router. You should avoid this practice at all costs. This is a great way to let attackers into your system. If you need to expose services to the public (personal sites, apps you made, public dashboards, etc.), use something like [Cloudflare Tunnels](https://developers.cloudflare.com/tunnel/), although even this has some privacy concerns. You should also be on top of updating any service that is exposed to the internet. Although Cloudflare Tunnels give you a secure tunnel to the internet, you are not immune to vulnerabilities in the services you are exposing.

Any service that **can be private should be private**. I use [Tailscale](https://tailscale.com/) for accessing my services from anywhere. Tailscale uses [WireGuard](https://www.wireguard.com/) to create virtual tunnels to your services, accessible only by devices on your [Tailnet](https://tailscale.com/docs/reference/glossary#tailnet). This is an extra layer of security that helps you stay secure. Tailscale IPs are daunting to type into your address bar; there are several ways to solve this, like [GoLink](https://github.com/tailscale/golink) or a setup like I have that you can read about [here](#nginx).

Tailscale is also a great way to securely [SSH](https://tailscale.com/docs/features/tailscale-ssh) into your homelab. You should never have a public SSH port into your homelab.

### 3. Expand as you go
Homelabbing can get expensive, and AI is making the problem even worse. So start off simple, use an old laptop or a Raspberry Pi to get things up and running. Once you start to require more and more resources, buy more RAM, buy more storage, buy a better CPU. eBay is a great place to buy used parts. I like to buy old enterprise hard drives and run them in [RAID](https://en.wikipedia.org/wiki/RAID) so that when a drive inevitably fails, I'm still protected.

Software can be thought of much in the same way as Hardware. You don't need to start with custom SSO, and you don't need [Kubernetes](https://kubernetes.io/) for services only you access. But as you start to use more and more services, tools like [Portainer](https://portainer.io/) and [Watchtower](https://github.com/nicholas-fedor/watchtower) can help you manage and update Docker services. As you grow your homelab, you can also implement [Grafana](https://grafana.com/) and [Prometheus](https://prometheus.io/) for monitoring services.

The point is, your homelab is your own. Lots of people enjoy [Proxmox](https://www.proxmox.com/en/) for managing containers, but I enjoy the flexibility that Ubuntu Server provides. As a developer, you should explore lots of pathways and pick what you like and enjoy using the best.
## Current Setup
I use a lot of services in my homelab, but I'll go over some of my most essential services in this blog post.
### Docker
Docker is essential in my homelab. Docker lets me create virtualized containers for each service to run in. A Docker container is not a security boundary! Docker should be considered just a way to run applications without dependency problems.

Docker Compose is an amazing technology. It lets you create services through [YAML](https://yaml.org/) files. However, there is a lot that goes on in administering and managing Docker containers that is just too clunky for the command line, especially when I'm working from my phone. So I use [Portainer]([https://portainer.io/](https://portainer.io/)) to help administer and manage Docker containers.

### Plex
[Plex](https://plex.tv) is one of my most used services by far. Plex lets me watch *my* own movies and TV and listen to _my_ music from anywhere. This blog post is far from a guide to setting up Plex, so check out this [post](https://support.plex.tv/articles/200264746-quick-start-step-by-step-guides/).

For beginners, I would have used to recommend Plex in a heartbeat. I've used Jellyfin, and it's amazing, especially for open-source software, but Plex is much more polished, and if you want family members to use your homelab, fumbling around with Jellyfin configs just isn't going to work. However, Jellyfin is rapidly getting better, and ever since Plex raised their prices to $1000 for the lifetime pass, I recommend new homelabbers use Jellyfin, then consider Plex later down the line.

### "[Linux ISOs](https://www.urbandictionary.com/define.php?term=Linux+ISO&amp=true)"
I'm picky with what I download. I keep a fairly high quality bar on my server, so I don't use the -arr stack. I run [arch-qbittorrentvpn](https://github.com/binhex/arch-qbittorrentvpn) routed through [Mullvad](https://mullvad.net/en) to download my media.

Be safe and don't download anything executable.
### nginx
I'm almost ashamed to admit that a lot of my services were exposed to the public internet for a long time. I've finally changed that with [nginx](https://nginx.org/). I use nginx to give my services nice internal URLs that I can connect to, like vaultwarden.emilio-mendoza.lan.

To set this up, you need some kind of DNS resolver for your Tailnet. I already use Pi-hole to block ads, so I added a DNS record to point *.emilio-mendoza.lan to my server running nginx. From there, a simple config tells nginx where to send the traffic. The config looks something like this.
```nginx
# service name

server {
	listen 100.XXX.XXX.XXX ssl;
	http2 on;
	server_name XXXX.YOUR_DOMAIN.lan;
	location / {
		proxy_pass http://127.0.0.1:XXXX;
		proxy_http_version 1.1;
		proxy_set_header Host $host;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection "upgrade";
	}
}
```
You'll also have to add in a cert with makecert so your browser doesn't flag it as suspicious.

## Next Steps
There are so many different tools out there for administering your homelab and infrastructure. Recently I've added two new physical servers to my homelab, and so I'm trying to look ahead into what I can use to administer them and protect myself against failures. As a bonus, I'd like to get into Infrastructure as a career, so any new technologies can help.

[Terraform](https://developer.hashicorp.com/terraform) is a tool that lets you define infrastructure as code. Currently, I'm in the process of experimenting with Terraform and getting a feel for how I can use this to define services on my homelab.

Email clients are hard to set up and hard to maintain. There are a lot of hoops to jump through to get the big email providers like Google and Microsoft to trust your email server. On top of that, your mail server should be up 100% of the time, unless you want to miss an email that happens to not retry sending on a failure. But I want to self-host my own email. Stay posted for some updates on this process.

Grafana and Prometheus are essential in my homelab for metrics monitoring, and I plan on expanding their use and reach to get more insight into my three nodes. I will also make a blog post on this in the future.