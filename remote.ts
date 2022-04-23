import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
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
    console.log("responseAngularJsLike");
    await responseAngularJsLike();
    console.log("requestInterceptor");
    await requestInterceptor();
    console.log("responseInterceptor");
    await responseInterceptor();
    console.log("errorHandler");
    await errorHandler();
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

async function responseAngularJsLike() {
  const response: IHttpResponseAngularJsLike<Root> = await axios
    .get<Root>(JSON_URL)
    .then((response) => ({
      ...response,
      headers: (headerName) => response.headers[headerName],
      config: {
        ...response.config,
        url: response.config.url ? response.config.url : "",
        headers: _(response.config.headers)
          .toPairs()
          .map(([key, value]) => [key, `${value}`])
          .fromPairs()
          .value(),
      },
    }));
  console.log(`status: ${response.status}`);
}

async function requestInterceptor() {
  const data = {
    firstName: "Fred",
    lastName: "Flintstone",
  } as const;
  let interceptorCallCount = 0;
  const interceptor = axios.interceptors.request.use(
    (config: AxiosRequestConfig<typeof data>) => {
      console.log(`intercepted config.data: ${JSON.stringify(config.data)}`);
      interceptorCallCount++;
      return config;
    }
  );
  try {
    const response = await axios.get<Root>(JSON_URL, { data });
    console.log(`status: ${response.status}`);
  } finally {
    axios.interceptors.request.eject(interceptor);
  }
  if (interceptorCallCount === 0) {
    throw new Error("requestInterceptor not called");
  }
}

async function responseInterceptor() {
  let interceptorCallCount = 0;
  const interceptor = axios.interceptors.response.use(
    (response: AxiosResponse<Root>) => {
      console.log(
        `intercepted response.data.NtfyConfig.Complete.BdrColor: ${response.data.NtfyConfig.Complete.BdrColor}`
      );
      interceptorCallCount++;
      return response;
    }
  );
  try {
    const response = await axios.get<Root>(JSON_URL);
    console.log(`status: ${response.status}`);
    console.log(
      `response.data.NtfyConfig.Complete.BdrColor: ${response.data.NtfyConfig.Complete.BdrColor}`
    );
  } finally {
    axios.interceptors.response.eject(interceptor);
  }
  if (interceptorCallCount === 0) {
    throw new Error("responseInterceptor not called");
  }
}

async function errorHandler() {
  try {
    await axios(`http://${IP}:${PORT + 1}/no-such-entry`);
  } catch (error) {
    console.log("error caught");
    console.log(`axios?: ${axios.isAxiosError(error)}`);
    return;
  }
  throw new Error("No error from Axios");
}
