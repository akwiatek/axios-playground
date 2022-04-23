import * as angular from "angular";

export interface IHttpResponseAngularJsLike<T> {
    data: T;
    status: number;
    headers(headerName: string): string;
    config: {
        // response only
        url: string;
        headers?: Record<string, string | number>;
        // request only
        xsrfCookieName?: string | undefined;
    };
}

export type IHttpPromiseAngularJsLike<T> = Promise<
    IHttpResponseAngularJsLike<T>
>;

export type HttpPromiseAngularJs<T> = angular.IHttpPromise<T>;
export type HttpResponseAngularJs<T> = angular.IHttpResponse<T>;
