FROM  node:18.18.2-alpine3.18
WORKDIR /code
RUN apt-get update -y && apt-get install -y openssl
COPY package.json /code/
RUN npm install
COPY . /code/
EXPOSE 5000
RUN npm install -g @godspeedsystems/godspeed
RUN godspeed prisma prepare
CMD ["godspeed", "dev"]
