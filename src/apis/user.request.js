import { LOGIN_ENDPOINT } from "../config/api.config";
import { httpPostRequest } from "./httpPost.request";

export const loginRequest = async (body) => {

    const response = await httpPostRequest(LOGIN_ENDPOINT, body);
    if (response.status === 200) {
        return Promise.resolve({
            success: true,
            message: "Login successful",
            data: response.data
        })
    }
    else {
        return Promise.resolve({
            success: false,
            message: typeof response.data === "string" ? response.data : response.data.message
        })
    }
}