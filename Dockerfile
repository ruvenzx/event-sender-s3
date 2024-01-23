    FROM node:21-alpine3.18
    WORKDIR /usr/cyera
    EXPOSE 80 80
    COPY package.json .
    RUN npm install\
        && npm install typescript -g
    COPY . .
    RUN tsc
    CMD ["node", "./build/index.js"]