import { CommentData } from "@/types";
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
console.log("Base URL", baseURL);


export function postComment(data: CommentData) {
    return axios.post(`${baseURL}/api`, data);
}

export function getComments(blogId: string) {
    return axios.get(`${baseURL}/api?blogId=${blogId}`);
}
