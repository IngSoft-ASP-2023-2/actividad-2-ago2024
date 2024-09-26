# Use the official Node.js image as the base image
FROM node:20

# Create a working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["node", "index.js"]
