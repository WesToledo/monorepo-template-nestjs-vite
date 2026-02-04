FROM node:22-alpine AS base
RUN npm install -g turbo
WORKDIR /app

FROM base AS pruner
COPY . .
RUN turbo prune --scope=backend --docker

FROM base AS builder
WORKDIR /app
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/package-lock.json ./package-lock.json
RUN npm install

COPY --from=pruner /app/out/full/ .
RUN npx prisma generate --schema=./apps/backend/prisma/schema.prisma
RUN npm run build --filter=backend

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/apps/backend/dist ./apps/backend/dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/backend/package.json ./apps/backend/package.json
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
ENV PORT 3000

CMD ["npm", "run", "prod", "-w", "backend"]
