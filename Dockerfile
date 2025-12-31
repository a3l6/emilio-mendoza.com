FROM python:3.12-slim

WORKDIR /app

COPY publickey.asc .
COPY src/main.py .
COPY static ./static

EXPOSE 9090

CMD ["python", "main.py"]

