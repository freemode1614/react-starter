FROM node:24-alpine AS dependencies-env
RUN corepack enable && corepack prepare pnpm@11 --activate
COPY . /app
WORKDIR /app
RUN pnpm install --frozen-lockfile

FROM node:24-alpine AS build-env
RUN corepack enable && corepack prepare pnpm@11 --activate
COPY --from=dependencies-env /app /app
WORKDIR /app
RUN pnpm build

FROM nginx:alpine
COPY --from=build-env /app/build/client /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
