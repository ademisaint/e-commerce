// baseHttpService.ts
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

export default class ApiService {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    // Generic request method
    protected async request(config: AxiosRequestConfig): Promise<AxiosResponse<any>> {
        const url = `${this.baseUrl}${config.url}`;
        const response = await axios.request({ ...config, url });
        return response;
    }
}