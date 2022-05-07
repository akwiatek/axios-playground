import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import MockAdapter from "axios-mock-adapter";
import "jasmine";
import sample from "./sample.json";

const IP = "127.0.0.1",
    PORT = 4000,
    JSON_URL = `http://${IP}:${PORT}/`;

describe("spec", () => {
    it("should mock axios", async () => {
        const config: AxiosRequestConfig = {
            method: "GET",
            url: JSON_URL,
        };
        const axiosInstance = axios.create(config);
        const mock = new MockAdapter(axiosInstance);
        mock.onGet(JSON_URL).reply(200, sample);
        const response: AxiosResponse<typeof sample> = await axiosInstance(
            JSON_URL
        );
        expect(response.data.NtfyConfig.Complete.BdrColor).toEqual(
            sample.NtfyConfig.Complete.BdrColor
        );
    });
});
