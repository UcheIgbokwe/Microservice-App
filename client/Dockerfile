FROM node:alpine

#TO ALLOW REACT APP START IN DOCKER
ENV CI=true

WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./
CMD ["npm", "start"]