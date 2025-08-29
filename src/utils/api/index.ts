import { CommentData } from "@/types";
import axios from "axios";

const baseURL = typeof window !== "undefined" ? window.location.origin : "";

export function postComment(data: CommentData) {
    return axios.post(`${baseURL}/api`, data);
}

export function getComments(blogId: string) {
    return axios.get(`${baseURL}/api?blogId=${blogId}`);
}
