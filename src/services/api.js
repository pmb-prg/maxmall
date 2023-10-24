import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products";

const getProducts =async () => {
    const response = await axios.get(BASE_URL)

    return response.data;
}

export {getProducts};