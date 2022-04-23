import http from "http";
import fs from "fs";
import axios from "axios";
import _ from "lodash";
import { Root } from "./sample.dto";

const JSON_URL = "http://127.0.0.1:3000/";

(async function main() {
  const server = startServer();
  try {
    console.log("get");
    await get();
    console.log("dto");
    await dto();
    console.log("post");
    await post();
    console.log("get + post");
    await Promise.all([get(), post()]);
    console.log("config");
    await config();
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

async function get() {
  const response = await axios.get<Root>(JSON_URL);
  console.log(`status: ${response.status}`);
}

async function dto() {
  const response = await axios.get<Root>(JSON_URL);
  console.log(
    `response.data.CommonData.BAnimation: ${response.data.CommonData.BAnimation}`
  );
}

async function post() {
  const response = await axios.post<Root>(JSON_URL);
  console.log(`status: ${response.status}`);
}

async function config() {
  const response = await axios({
    method: "GET",
    url: JSON_URL,
    data: {
      firstName: "Fred",
      lastName: "Flintstone",
    },
  });
  console.log(`status: ${response.status}`);
}
