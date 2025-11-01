
# Stage 1: Build React App
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --legacy-peer-deps

# Copy all project files
COPY . .

# Build the production version of the app
RUN npm run build

# Stage 2: Serve with NGINX
FROM nginx:alpine

# Create working directory for assignment requirement
WORKDIR /benson_constance_ui_garden_build_checks

# Copy build output from first stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 8018
EXPOSE 8018

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
