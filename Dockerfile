FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package files first (layer caching — faster rebuilds)
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy the rest of your app code
COPY . .

# Expose the port your app listens on
EXPOSE 3000

# Start the app
CMD ["node", "src/index.js"]