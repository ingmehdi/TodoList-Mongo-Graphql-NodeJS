import dotenv from 'dotenv';

import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';
import MongoConfig from './config/MongoConfig';
import helmet from 'helmet';

dotenv.config();
let mongo: MongoConfig = new MongoConfig();

const app = express();
const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
  playground: true,
});
app.use(helmet());
app.use('*', cors());
app.use(compression());
server.applyMiddleware({ app, path: '/graphql' });
const httpServer = createServer(app);
mongo.connect();
httpServer.listen({ port: 3000 }, (): void =>
  console.log(`\n🚀      GraphQL is now running on http://localhost:3000/graphql`)
);
