import axios from "axios";
import _ from "lodash";

const JSON_URL =
  "https://cdn.cookielaw.org/consent/3d9a6f21-8e47-43f8-8d58-d86150f3e92b/bfdc0170-9d1e-4c7f-8c32-8330b9996124/en.json";

(async function main() {
  await simple();
  await angularJsTypes();
})();

async function simple() {
  const response = await axios.get(JSON_URL);
  console.log(`
    status: ${response.status}
    has data?: ${!_.isEmpty(response.data)}
  `);
}

async function angularJsTypes() {
  const response = await axios.get(JSON_URL);
  console.log(_.isEmpty(response));
}
