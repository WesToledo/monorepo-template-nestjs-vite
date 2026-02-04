FROM node:22-alpine AS base
RUN npm install -g turbo
WORKDIR /app

FROM base AS pruner
COPY . .
RUN turbo prune --scope=frontend --docker

FROM base AS builder
WORKDIR /app
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/package-lock.json ./package-lock.json
RUN npm install

COPY --from=pruner /app/out/full/ .
RUN npm run build --filter=frontend

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/apps/frontend/dist ./apps/frontend/dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/frontend/package.json ./apps/frontend/package.json
COPY --from=builder /app/package.json ./package.json

EXPOSE 5173

CMD ["npm", "run", "preview", "-w", "frontend", "--", "--host", "0.0.0.0"]
