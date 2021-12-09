import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
const express = require("express");

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });
  app.use(express.json());

  await app.listen(process.env.PORT || (5001 as number));
}
bootstrap();
