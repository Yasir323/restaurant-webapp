# Use a Node.js base image
FROM node:14-alpine 

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Expose port 80
EXPOSE 80

# Command to run the React app
CMD ["npm", "start"]

