import http from "http";
import _ from "lodash";
import sample from "./sample.json";

export function startServer(
  ip: string,
  port: number
): Pick<http.Server, "close"> {
  return http
    .createServer((req, res) => {
      console.log(`request: ${req.method}`);
      res
        .writeHead(200, { "Content-Type": "text/json" })
        .end(JSON.stringify(sample));
    })
    .listen(port, ip);
}
