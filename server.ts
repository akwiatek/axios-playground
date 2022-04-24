import http from "http";
import _ from "lodash";
import sample from "./sample.json";

export function startServer(
  ip: string,
  port: number
): Pick<http.Server, "close"> {
  let app = http.createServer((req, res) => {
    console.log(`request: ${req.method}`);
    res
      .writeHead(200, { "Content-Type": "text/json" })
      .end(JSON.stringify(sample));
  });
  app.listen(port, ip);
  return app;
}
