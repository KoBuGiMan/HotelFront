FROM node:20.11.0-alpine

WORKDIR /TeamProject/frontend

COPY package.json package-lock.json ./

# Clean npm cache and install dependencies
RUN npm cache clean --force && npm install

# Copy the rest of the application code
COPY . ./

EXPOSE 3000

CMD ["npm", "run", "start"]
