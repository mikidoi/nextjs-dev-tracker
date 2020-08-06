// Set up our connection to MongoDB
// Instantiate the middleware to use it in our API routes
import { MongoClient } from "mongodb";
import nextConnect from "next-connect";

const client = new MongoClient(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db("kids-dev-tracker");
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;
