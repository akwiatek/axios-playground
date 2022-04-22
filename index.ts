import http from "http";
import fs from "fs";
import axios from "axios";
import _ from "lodash";

const JSON_URL = "http://127.0.0.1:3000/";

(async function main() {
  const server = startServer();
  try {
    await simple();
    await angularJsTypes();
  } finally {
    server.close();
  }
})();

function startServer() {
  let app = http.createServer((_req, res) => {
    res.writeHead(200, { "Content-Type": "text/json" });
    let vidstream = fs.createReadStream("sample.json");
    vidstream.pipe(res);
  });
  app.listen(3000, "127.0.0.1");
  return app;
}

async function simple() {
  const response = await axios.get(JSON_URL);
  console.log(`
    status: ${response.status}
    has data?: ${!_.isEmpty(response.data)}
  `);
}

async function angularJsTypes() {
  const response = await axios.get(JSON_URL);
  console.log(response.data);
}
