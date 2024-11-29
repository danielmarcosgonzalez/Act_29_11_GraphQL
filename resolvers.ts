import { Collection, ObjectId } from "mongodb";
import { Vuelo, VueloModel } from "./type.ts";
import { formModelVuelo } from "./utils.ts";

export const resolvers = {
    Query:{
        getFlights: async (
            _:unknown,
            arg:{Origen: string, Destino: string},
            context:{VueloCollection: Collection<VueloModel>},
        ):Promise<Vuelo[]> =>{
            if(arg.Origen){
                const Origen = arg.Origen;
                const vuelo = await context.VueloCollection.find({Origen}).toArray();
                return vuelo.map((vueloModel)=>
                 formModelVuelo(vueloModel)
                );
            }else if( arg.Destino){
                const Destino = arg.Destino;
                const vuelo = await context.VueloCollection.find({Destino}).toArray();
                return vuelo.map((vueloModel)=>
                    formModelVuelo(vueloModel)
                   );
            }else if (arg.Origen && arg.Destino){
                const Destino = arg.Destino;
                const Origen = arg.Origen;
                const vuelo = await context.VueloCollection.find({Destino,Origen}).toArray();
                return vuelo.map((vueloModel)=>
                    formModelVuelo(vueloModel)
                   );
            }else{
                const vuelo = await context.VueloCollection.find().toArray();
                return vuelo.map((vueloModel)=>
                    formModelVuelo(vueloModel)
                   );
            }
        },
        getFlight: async (
            _: unknown,
            {id}:{id:string},
            context:{VueloModel: Collection<VueloModel>},

        ):Promise<Vuelo | null> =>{
            
            const vuelo = await context.VueloModel.findOne({
                _id: new ObjectId(id),
              })
            if(!vuelo){
                return null;
            }
            return formModelVuelo(vuelo)
        }
    },
    Mutation:{

    }
}