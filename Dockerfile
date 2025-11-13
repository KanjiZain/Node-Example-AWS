# Use official Node.js 20 image as base
FROM node:20

# Create app directory inside container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app source code
COPY . .

# Expose port your app runs on (default express port 3000, change if needed)
EXPOSE 3000

# Command to run your app
CMD ["node", "server.js"]
