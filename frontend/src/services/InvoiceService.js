import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8383/invoices/price_range';

export const listInvoices = () => {
    return axios.get(REST_API_BASE_URL);
}