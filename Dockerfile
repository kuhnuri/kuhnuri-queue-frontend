FROM node:alpine

WORKDIR /opt/app

#COPY package*.json ./

# If you are building your code for production
# RUN npm install --only=production

COPY . .
RUN npm install --only=production

EXPOSE 3000
CMD [ "npm", "start" ]
