FROM registry.supertokens.io/supertokens/supertokens-postgresql:latest

RUN apt -y update && apt -y install nginx && rm -rf /var/cache/apt/archives /var/lib/apt/lists/*

COPY nginx.conf /etc/nginx/sites-enabled/default
COPY start.sh /start.sh

EXPOSE 80/tcp

CMD "/start.sh"
