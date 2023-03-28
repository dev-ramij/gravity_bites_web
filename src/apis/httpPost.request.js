import axios from 'axios';
import { BASE_URL } from '../config/api.config';

export const httpPostRequest = async (endPoint, body) => {
    try {
        const response = await axios.post(BASE_URL + endPoint, body);
        return response;
    }
    catch (e) {
        if (e.response) {
            return e.response;
        }
        else {
            return {
                status: 500,
                error: "Internal error"
            }
        }
    }
}