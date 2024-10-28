import ApiService from "./baseHttpService"; // Assuming you have a base API service setup
import { HttpMethod } from "./baseHttpService";

export default class ProductService extends ApiService {
    constructor() {
        super('https://dummyjson.com');
    }

    // Fetch products with optional sorting parameters
    async fetchProducts(sortBy?: string, order?: 'asc' | 'desc') {
        const sortQuery = sortBy ? `?sortBy=${sortBy}&order=${order}` : '';
        return await this.request({
            method: HttpMethod.GET,
            url: `/products${sortQuery}`,
        });
    }
}