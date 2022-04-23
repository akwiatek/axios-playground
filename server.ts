import http from "http";
import fs from "fs";
import _ from "lodash";

export function startServer(
  ip: string,
  port: number
): Pick<http.Server, "close"> {
  let app = http.createServer((req, res) => {
    console.log(`request: ${req.method}`);
    res.writeHead(200, { "Content-Type": "text/json" });
    let vidstream = fs.createReadStream("sample.json");
    vidstream.pipe(res);
  });
  app.listen(port, ip);
  return app;
}
