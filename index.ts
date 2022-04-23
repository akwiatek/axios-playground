import axios from "axios";
import _ from "lodash";
import { startServer } from "./server";
import { Root } from "./sample.dto";
import { IHttpResponseAngularJsLike } from "httpTypes";

const IP = "127.0.0.1",
  PORT = 3000,
  JSON_URL = `http://${IP}:${PORT}/`;

(async function main() {
  const server = startServer(IP, PORT);
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
    console.log("angularJsLike");
    await angularJsLike();
  } finally {
    server.close();
  }
})();

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

async function angularJsLike() {
  const response: IHttpResponseAngularJsLike<Root> = await axios
    .get<Root>(JSON_URL)
    .then((response) => {
      const requestHeaders: Record<string, string> | undefined =
        response.config.headers === undefined
          ? undefined
          : _(response.config.headers)
              .toPairs()
              .map(([key, value]) => [key, `${value}`])
              .fromPairs()
              .value();
      return {
        ...response,
        headers: (headerName) => response.headers[headerName] ?? "",
        config: {
          ...response.config,
          headers: requestHeaders,
          url: JSON_URL,
        },
      };
    });
  console.log(`status: ${response.status}`);
}
