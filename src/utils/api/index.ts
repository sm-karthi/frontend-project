import axios from "axios";

export function postNameAndComments(values: object) {
    return axios.post("https://68806d26f1dcae717b61f26f.mockapi.io/comments", values);
}
