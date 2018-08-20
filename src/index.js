const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const AuthPayload = require('./resolvers/AuthPayload')

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
  	Query,
  	Mutation,
  	AuthPayload
  },
  context: req => ({
  	...req,
  	db: new Prisma({
  		typeDefs: 'src/generated/prisma.graphql',
  		endpoint: 'https://us1.prisma.sh/jennifer-scroggins-e3a3bd/database/dev',
  		secret: 'b3ll@g0th43v@r',
  		debug: true,
  	}),
  }),
})
server.start(() => console.log(`Server is running on http://localhost:4000`))