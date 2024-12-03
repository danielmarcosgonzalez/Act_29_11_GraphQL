import { MongoClient } from "mongodb";
import { VueloModel } from "./type.ts";
import { schema } from "./schema.ts";
import {ApolloServer} from "@apollo/server";
import { resolvers } from "./resolvers.ts";
import { startStandaloneServer } from "@apollo/server/standalone";

//const Mongo = Deno.env.get("Mongo_url");

//if (!Mongo) {
  //throw new Error("Please provide a MONGO_URL");
//}

const mongoClient = new MongoClient("mongodb+srv://dmarcosg:123456789abc@nebrijacluster.j3irq.mongodb.net/?retryWrites=true&w=majority&appName=NebrijaCluster");
await mongoClient.connect();

console.info("Conected to MongoDB");

const mongoDB = mongoClient.db("act2_vuelos");
const VuelosCollection = mongoDB.collection<VueloModel>("vuelos");

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async () => ({ VuelosCollection }),
});

console.info(`Server ready at ${url}`);