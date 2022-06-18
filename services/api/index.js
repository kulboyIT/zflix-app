import axios from "axios";
import { responseHandler, errorHandler } from "./response";

const BASE_URL = "http://localhost:5000/api/v3";

function setHeaders(token) {
    return {
        headers: {
            authorization: "Bearer " + token,
        },
    };
}

const makeGetRequest = (URL) =>
    axios.get(`${BASE_URL}${URL}`).then(responseHandler).catch(errorHandler);

const makeGetRequestWithAuthorization = (URL, token) =>
    axios
        .get(`${BASE_URL}${URL}`, setHeaders(token))
        .then(responseHandler)
        .catch(errorHandler);

const makePostRequest = (URL, body) =>
    axios
        .post(`${BASE_URL}${URL}`, body)
        .then(responseHandler)
        .catch(errorHandler);

const makePostRequestWithAuthorization = (URL, body,token) =>
    axios
        .post(`${BASE_URL}${URL}`, body,setHeaders(token))
        .then(responseHandler)
        .catch(errorHandler);

export default {
    makeGetRequest,
    makePostRequest,
    makeGetRequestWithAuthorization,
    makePostRequestWithAuthorization,
    BASE_URL
};
