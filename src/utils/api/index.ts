import { CommentData } from "@/types";
import axios from "axios";

// const baseUrl = process.env.BASE_URL;
// console.log("Base URL", baseUrl);


export function postComment(data: CommentData) {
    return axios.post(`https://rv-swart.vercel.app/api`, data);
}

export function getComments(blogId: string) {
    return axios.get(`https://rv-swart.vercel.app/api?blogId=${blogId}`);
}
