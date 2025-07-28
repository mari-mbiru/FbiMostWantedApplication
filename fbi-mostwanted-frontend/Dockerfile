# --------- Build Stage ---------
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy dependencies and install
COPY package*.json ./
RUN npm install

# Copy source code and build
COPY . .
RUN npm run build

# --------- Production Stage ---------
FROM nginx:stable-alpine AS production

# Copy built files from the previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: replace default nginx config
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Expose port (default is 80)
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
