import { config } from "#config/env.config.js";
import { verifyConnectionMail } from "#mail/config/mail.config.js";
import { dbConnect } from "#db/services/dbConnection.js";

const { port } = config;

export const serverInit = async (app) => {
  try {
    console.log("Verificando Conexión a la Base de Datos");
    await dbConnect();
    app.listen(port, async () => {
      await verifyConnectionMail();
      console.log(`Servidor iniciado en el puerto ${port}`);
    });
  } catch (error) {
    console.error("Error al inicializar el servidor", error);
  }
};
