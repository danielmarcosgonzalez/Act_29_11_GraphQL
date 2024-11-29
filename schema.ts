export const schema = `#graphql

type Vuelo {
    id: ID!
    Origen: String!
    Destino: String!
    Fecha: string!
}

type Query {
    getFlights(Origen: String, Destino: String):[Vuelo!]!
    getFlight(id:ID!):Vuelo
}

type Mutation {
    addFlight(Origen: String!, Destino: String!, Fecha:string!):Vuelo!
}
`