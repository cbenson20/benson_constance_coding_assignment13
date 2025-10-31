# ---- This will Build React App compiles storybook static files----
FROM node:20-alpine AS react_build
WORKDIR /benson_constance_ui_garden

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy source code and build React app
COPY . .
RUN npm run build


# ---- This will Build Storybook ----
FROM node:20-alpine AS storybook_build
WORKDIR /benson_constance_ui_garden

# Copy package files and install dependencies again for isolation
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy all project files and build Storybook static site
COPY . .
RUN npx storybook build


# ---- This is the Production (Nginx) uses it to serve those built files on prot 8083 ----
FROM nginx:alpine
WORKDIR /benson_constance_ui_garden

# Copy both builds into Nginx html folder
# React app:/usr/share/nginx/html/react
# Storybook:/usr/share/nginx/html/storybook
COPY --from=react_build /benson_constance_ui_garden/build /usr/share/nginx/html
COPY --from=storybook_build /benson_constance_ui_garden/storybook-static /usr/share/nginx/html/storybook

# Expose port 8083
EXPOSE 8083

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
