import morgan from "morgan";
import cors from "cors";
import { json, Express } from "express";
import { configDotenv } from "dotenv";

export function configApp (app: Express) {
    configDotenv();
    addMiddlewares(app);
}

function addMiddlewares (app: Express) {
    app.use(json());
    app.use(cors());
    app.use(morgan("dev"));
}