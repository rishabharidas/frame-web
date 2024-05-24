FROM node:20.0.0-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

RUN npm run build && npm prune --production

FROM node:20.0.0-alpine
WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json ./
ENV PORT=3000
ENV NODE_ENV=production

EXPOSE 5173
CMD [ "node", "build" ]