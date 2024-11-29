import { Vuelo, VueloModel } from "./type.ts";


export const formModelVuelo = (vueloModel: VueloModel): Vuelo => {
    return{
        id: vueloModel._id!.toString(),
        origen: vueloModel.Origen,
        destino: vueloModel.Destino,
        fecha: vueloModel.Fecha,
    };
};