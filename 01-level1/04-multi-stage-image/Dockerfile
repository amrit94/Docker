FROM node:slim as base

# Stage 1: Build TS project using dev-dependencies
FROM base as builder

WORKDIR /home/app
COPY . /home/app
RUN npm install
RUN npx tsc

# Stage 2 (Runner): Run the app using only production dependencies
FROM base as runner

WORKDIR /home/tsapp
COPY --from=builder /home/app/dist /home/tsapp/dist/
COPY --from=builder /home/app/package*.json .


RUN npm instal --omit=dev
EXPOSE 3000

CMD ["node", "dist/index.js"]
