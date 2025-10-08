# ---- Build stage ----
FROM node:20-alpine AS build

WORKDIR /benson_constance_ui_garden

# Copy package files and install dependencies (force peer deps resolution)
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy the rest of the project
COPY . .

# Build static Storybook files
RUN npx storybook build

# ---- Production stage ----
FROM nginx:alpine

# Copy built Storybook files from the previous stage
COPY --from=build /benson_constance_ui_garden/storybook-static /usr/share/nginx/html

EXPOSE 8083
CMD ["nginx", "-g", "daemon off;"]
