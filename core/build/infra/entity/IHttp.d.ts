export interface IHttpResponse<T> {
    status: number;
    headers: Record<string, string | string[]>;
    data: T;
}
