const requireLogin = false /* This will make the website go to a 404 page if set to true to make it harder to be found and blocked. To get past the 404, press the keys WRIZ on your keyboard at the same time. Then right after you release it, quickly hold down the keys PRXY at the same time until it asks for a passcode. The deafult passcode is rizzproxy=ontop but it can be customized on line 29 */

import express from "express";
import { createServer } from "node:http";
import { publicPath } from "ultraviolet-static";
import { uvPath } from "@titaniumnetwork-dev/ultraviolet";
import { epoxyPath } from "@mercuryworkshop/epoxy-transport";
import { baremuxPath } from "@mercuryworkshop/bare-mux";
import { join } from "node:path";
import { hostname } from "node:os";
import wisp from "wisp-server-node";
import session from "express-session";
import MemoryStore from "memorystore";
import bodyParser from "body-parser";

const app = express();

var jsonParser = bodyParser.json()

app.use(session({
    cookie: { maxAge: 1000 * 60 * 60 },
    resave: false,
    secret: process.env.RPKEY
}));

if(requireLogin) {
app.use(jsonParser, function(req, res, next) {
  if (req.path == "/login") {
    if(req.body.password == "rizzproxy=ontop") { //change the passcode to whatever you want. Note that a passcode is only required if you turn on password protection and the 404 disguise. 
      req.session.loggedin = true;
      res.status(200);
      res.send();
    } else {
      res.status(401);
      res.send();
    }
  } else if (req.session.loggedin) {
    next();
  } else {
    res.sendFile(join(publicPath, "login.html"));
  }
});
}
// Load our publicPath first and prioritize it over UV.
app.use(express.static(publicPath));
// Load vendor files last.
// The vendor's uv.config.js won't conflict with our uv.config.js inside the publicPath directory.
app.use("/uv/", express.static(uvPath));
app.use("/epoxy/", express.static(epoxyPath));
app.use("/baremux/", express.static(baremuxPath));

// Error for everything else
app.use((req, res) => {
  res.status(404);
  res.sendFile(join(publicPath, "404.html"));
});

const server = createServer();

server.on("request", (req, res) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  app(req, res);
});
server.on("upgrade", (req, socket, head) => {
  if (req.url.endsWith("/wisp/"))
    wisp.routeRequest(req, socket, head);
  else
    socket.end();
});

let port = parseInt(process.env.PORT || "");

if (isNaN(port)) port = 8080;

server.on("listening", () => {
  const address = server.address();

  // by default we are listening on 0.0.0.0 (every interface)
  // we just need to list a few
  console.log("Listening on:");
  console.log(`\thttp://localhost:${address.port}`);
  console.log(`\thttp://${hostname()}:${address.port}`);
  console.log(
    `\thttp://${address.family === "IPv6" ? `[${address.address}]` : address.address
    }:${address.port}`
  );
});

// https://expressjs.com/en/advanced/healthcheck-graceful-shutdown.html
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

function shutdown() {
  console.log("SIGTERM signal received: closing HTTP server");
  server.close();
  process.exit(0);
}

server.listen({
  port,
});
