import { http as httpClient } from '../utils/httpClient';
import { ENDPOINTS } from '../utils/routes.constants';
export const ProductProvider = {
    getProducts: async () => httpClient.get(`${ENDPOINTS.PRODUCTS}`),
};
