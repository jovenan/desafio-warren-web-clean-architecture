import { FetchDataParams, IHttpRepository, IHttpResponse } from "../domain";
import { HttpUseCase } from "../domain";


export class HttpView {

    private http: IHttpRepository;

    constructor() {
        this.http = new HttpUseCase();
    }

    async fetchSafe<T>(params: FetchDataParams): Promise<IHttpResponse<T>> {
        return this.http.fetchData(params);
    }
}