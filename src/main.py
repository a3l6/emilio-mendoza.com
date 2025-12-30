from http.server import HTTPServer, BaseHTTPRequestHandler
import os
import logging
from dataclasses import dataclass
import mimetypes


@dataclass
class Settings:
    """Class for keeping track of global settings"""
    ip: str = '0.0.0.0'
    port: int = 9090


class Serv(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            self.path = 'index.html'
        if self.path == '/publickey.asc':
            self.send_file("publickey.asc")
            return
        if self.path == "/vim.png":
            self.send_file("static/vim.png")
            return
        try:
            file_to_open = open(os.path.join(
                os.getcwd(), "static", self.path)).read()
            self.send_response(200)
        except FileNotFoundError:
            file_to_open = "File not found"
            self.send_response(404)
        self.end_headers()
        self.wfile.write(bytes(file_to_open, 'utf-8'))

    def send_file(self, filepath):
        if not os.path.exists(filepath):
            self.send_response(404)
            self.end_headers()
            self.wfile.write(b"File not founssdsdd")
            return

        mime_type, _ = mimetypes.guess_type(filepath)
        mime_type = mime_type or "application/octet-stream"

        self.send_response(200)
        self.send_header("Content-Type", mime_type)
        self.send_header(
            "Content-Disposition",
            f'attachment; filename="{os.path.basename(filepath)}"'
        )
        self.send_header("Content-Length", os.path.getsize(filepath))
        self.end_headers()

        with open(filepath, "rb") as f:
            self.wfile.write(f.read())


def main():
    logging.basicConfig(level=logging.INFO)

    settings = Settings()

    logging.info("Starting server on localhost:8080")
    httpd = HTTPServer((settings.ip, settings.port), Serv)
    httpd.serve_forever()


if __name__ == "__main__":
    main()
