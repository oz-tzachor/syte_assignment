# Use a lightweight Node.js image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Install TypeScript and compile the code
RUN npm install -g typescript
RUN npx tsc

# Expose the backend port
EXPOSE 3033

# Start the compiled JavaScript code
CMD ["node", "dist/index.js"]
