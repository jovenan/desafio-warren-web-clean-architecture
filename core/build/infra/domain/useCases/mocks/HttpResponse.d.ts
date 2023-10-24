export declare const HttpResponse: {
    status: number;
    headers: {
        'x-powered-by': string;
        vary: string;
        'access-control-allow-credentials': string;
        'cache-control': string;
        pragma: string;
        expires: string;
        'x-content-type-options': string;
        'content-type': string;
        'content-length': string;
        etag: string;
        date: string;
        connection: string;
    };
    data: {
        id: string;
        title: string;
        description: string;
        status: string;
        amount: number;
        date: string;
        from: string;
        to: string;
    }[];
};
