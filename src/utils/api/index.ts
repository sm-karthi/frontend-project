import { CommentData } from "@/types";
import axios from "axios";

export function postComment(data: CommentData) {
    return axios.post("/api", data);
}

export function getComments(blogId: string) {
    return axios.get(`/api?blogId=${blogId}`)
}
