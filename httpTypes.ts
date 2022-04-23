import * as angular from "angular";

export interface IHttpResponse<T> {
    data: T;
    status: number;
    headers(headerName: string): string;
    config: Pick<angular.IRequestConfig, "url" | "headers">;
}

export type HttpPromiseAngularJs<T> = angular.IHttpPromise<T>;
export type HttpResponseAngularJs<T> = angular.IHttpResponse<T>;
