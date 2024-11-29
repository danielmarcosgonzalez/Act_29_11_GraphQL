import { OptionalId } from "mongodb";

export type VueloModel = OptionalId<{
    Origen:string,
    Destino:string,
    Fecha:string,
}>;

export type Vuelo = {
    id:string,
    origen:string,
    destino:string,
    fecha:string,
};