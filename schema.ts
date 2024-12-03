export const schema = `#graphql

type Vuelo {
    id: ID!
    Origen: String!
    Destino: String!
    Fecha: String!
}

type Query {
    getFlights(Origen: String, Destino: String):[Vuelo!]!
    getFlight(id:ID!):Vuelo
}

type Mutation {
    addFlight(Origen: String!, Destino: String!, Fecha:String!):Vuelo!
}
`