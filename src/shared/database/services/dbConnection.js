import { dbConfig } from "#db/config/db.config.js";
/* import { initModels } from "../utils/initModels";
import { setupAssociation } from "../utils/setupAssociation"; */

export const dbConnect = async () => {
  try {
    await dbConfig.authenticate();
    //En este punto inicializa los modelos y configura las asociaciones
    /* initModels(dbConfig);
    setupAssociation */
    await dbConfig.sync(/* { alter: true } */); //Habilita alter true para modificar las tablas con cada carga del servidor

    console.log("Logramos conectarnos a postre a traves de Sequelize");
  } catch (error) {
    console.error("No pudimos conectarnos a la DB", error);
    process.exit(1);
  }
};
