;
("use strict");
// configuración del servidor con express y cors para las peticiones de origenes desconocidos
const http = require("http"),
  express = require("express"),
  cors = require('cors'),
  paths = require("../paths/paths");
const app = express()
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
app.use("/", paths);
const server = http.createServer(app);
const port = 4000;
server.listen(port);
module.exports = app
