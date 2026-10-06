# Syntax: docker/dockerfile:1

# Build the client bundle. pnpm version is pinned via the `packageManager`
# field in package.json (corepack reads it automatically).
FROM node:24-alpine AS build
RUN corepack enable
WORKDIR /app

# Install dependencies first so this layer is cached unless the
# manifests change.
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy the source and build (SPA mode outputs build/client only).
COPY . .
RUN pnpm build

# Serve the static client build with nginx (SPA fallback in nginx.conf).
FROM nginx:alpine
COPY --from=build /app/build/client /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
