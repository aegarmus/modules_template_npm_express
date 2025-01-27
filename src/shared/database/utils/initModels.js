import { DataBaseError } from "#error/TypeError.js";


export const initModels = (config) => {
  try {

   /*Aquí deberías inicializar tus modulos de modelos  
    
   initUsuario(config);
    initProducto(config);
    initVenta(config);
    initVentasProductos(dbConfig); */
  } catch (error) {
    console.error(error);
    throw new DataBaseError("Error al iniicializar los modelos");
  }
};
