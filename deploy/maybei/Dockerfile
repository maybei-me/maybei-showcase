FROM node:20-alpine AS build

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./
COPY patches ./patches

RUN corepack prepare pnpm@10.4.1 --activate \
  && pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

FROM node:20-alpine

WORKDIR /app

COPY --from=build /app/dist ./dist

RUN npm init -y \
  && npm pkg set type=module \
  && npm install --omit=dev --no-audit --no-fund express@4 mysql2@3 zod@4

ENV NODE_ENV=production
ENV PORT=3000

USER node

CMD ["node", "dist/index.js"]
