import * as angular from "angular";

export interface IHttpResponse<T> {
    data: T;
    status: number;
    headers(headerName: string): string;
    config: {
        url: string;
        headers?: Record<string, string>;
    };
}

export type IHttpPromise<T> = Promise<IHttpResponse<T>>;

export type HttpPromiseAngularJs<T> = angular.IHttpPromise<T>;
export type HttpResponseAngularJs<T> = angular.IHttpResponse<T>;
