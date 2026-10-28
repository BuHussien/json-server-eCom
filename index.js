
const jsonServer = require("json-server");
const auth = require("json-server-auth");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 5005;

// Required by json-server-auth
server.db = router.db;

server.use(middlewares);

// Authentication middleware must run before the router
server.use(auth);
server.use(router);

server.listen(port, "0.0.0.0", () => {
  console.log(`JSON Server is running on port ${port}`);
});
