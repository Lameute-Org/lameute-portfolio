# Use the official Nginx image as the base image
FROM nginx:alpine

# Copy the website files to the Nginx HTML directory
COPY ./public /usr/share/nginx/html

# Copy the custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for HTTP traffic
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]