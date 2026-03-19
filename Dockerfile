# ── Build stage ──────────────────────────────────────────────────────────────
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build
RUN npm prune --production

# ── Runtime stage ─────────────────────────────────────────────────────────────
FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY --from=builder /app/package.json .
COPY --from=builder /app/src/posts posts/

ENV NODE_ENV=production
ENV PORT=3000
ENV POSTS_DIR=posts

EXPOSE 3000

CMD ["node", "build/index.js"]
