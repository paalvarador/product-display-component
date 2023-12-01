export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
}

/* This function is used to get the product information
 * through the fetch request */

export async function fetchProducts(): Promise<Product[]> {
    const API_URL = 'https://656900379927836bd975b3c2.mockapi.io/prodctly/api/v1';
    const PRODUCTS = '/products';

    try {
        const response = await fetch(`${API_URL}${PRODUCTS}`);
        
        if(!response.ok) {
            throw new Error('Endpoint response was not ok');
        }

        const data: Product[] = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data: ', error);
        throw error;
    }
}