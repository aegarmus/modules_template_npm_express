import { DataBaseError } from "#error/TypeError.js";

export const setupAssociation = () => {
  try {
    /*Aqui debes cargar las asociaciones para que se carguen en la db*/
  } catch (error) {
    console.error("Error al inicializar las relaciones", error);
    throw new DataBaseError("Error al iniicalizar las asociaciones", error);
  }
};
