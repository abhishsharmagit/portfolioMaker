import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as cookieParser from "cookie-parser";
import { join } from "path";
import { NestExpressApplication } from "@nestjs/platform-express";
const express = require("express");

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });
  app.use(express.json());
  app.use(cookieParser());
  app.useStaticAssets(join(__dirname, '..', '.next'))
  const service = app.get(ConfigService);
  await app.listen(process.env.PORT || 5001 as number);
}
bootstrap();
