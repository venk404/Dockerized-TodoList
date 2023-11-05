FROM node:20-alpine

WORKDIR /usr/src/app

COPY package* .


# Copy the rest of the application code to the working directory
COPY . .

RUN npm install

# Build your React app
RUN npm run build

# Expose a port (default for a React app is 3000)
EXPOSE 3000

# Start your React app when the container starts
CMD ["npm", "start"]