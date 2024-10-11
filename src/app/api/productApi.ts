
import axios from 'axios';

class ProductApi {
    private apiUrl: string;

    constructor() {
        this.apiUrl = 'https://fakestoreapi.com/products';
    }

    public async fetchProducts() {
        const response = await axios.get(this.apiUrl);
        return response.data;
    }
}

const productApi = new ProductApi();

export default productApi;
