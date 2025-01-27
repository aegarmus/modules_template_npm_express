import express from "express";
import cors from "cors";

import { errorHandler } from "#shared/middlewares/error.middleware.js";
import { serverInit } from "#shared/server/serverInit.js";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static("public"));

//Agregar configuraciones y middlewares para rutas


app.use(errorHandler);

serverInit(app);
