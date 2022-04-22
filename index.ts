import axios from "axios";
import _ from "lodash";

(async function main() {
  const response = await axios.get("https://www.google.com/");
  console.log(`status: ${response.status}`);
  console.log(`has data?: ${!_.isEmpty(response.data)}`);
})();
