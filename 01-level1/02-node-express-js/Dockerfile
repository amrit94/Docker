# Start with a lightweight Node.js image
FROM node:slim

# Set working directory inside the container.
WORKDIR /app

# Copy your project files into /app
COPY . /app

# Install project dependencies
RUN npm install

# Document that the app runs on port 3000
EXPOSE 3000

# Run the app when the container starts
CMD ["node", "index.js"]
