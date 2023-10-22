export interface IHttpResponse<T> {
    status: number;
    headers: Record<string, string>;
    data: T;
}
