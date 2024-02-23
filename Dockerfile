# syntax=docker/dockerfile:1

ARG NODE_VERSION=18

FROM node:${NODE_ENV}-alpine as base

WORKDIR /usr/src    

EXPOSE 3000

FROM base as dev
ENV NODE_ENV=local
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=./root/.npm \
    npm ci --include=dev
USER node
COPY . .
CMD npm run dev

FROM base as prod
ENV NODE_ENV=production
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=./root/.npm \
    npm run build
USER node
COPY . .
CMD npm run start

FROM base as test
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=./root/.npm \
    npm ci --include=dev
USER node
COPY . .
CMD npm run test
