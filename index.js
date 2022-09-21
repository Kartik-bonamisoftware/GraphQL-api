const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schema");

app.use(express.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(3500, () => console.log("Server Start"));
