"use client"

import { CommentsType } from "@/types"
import { getComments } from "@/utils/api";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";
import { CommentForm } from "../form";

export function Comments() {

    const params = useParams();
    const blogIdParam = params?.blogId;
    const blogId = Array.isArray(blogIdParam) ? blogIdParam[0] : blogIdParam;

    const [comments, setComments] = useState<CommentsType[]>([]);

    const fetchComments = async () => {
        if (!blogId) return;
        try {
            const res = await getComments(blogId);
            setComments(res.data);
        } catch (error) {
            console.log("Failed to fetch comments", error);
        }
    };

    useEffect(() => {
        fetchComments();
    }, [blogId]);



    return (

        <div className="mx-auto max-w-4xl mb-20">

            <CommentForm onNewComment={fetchComments} />

            {comments.length === 0 ? (
                <p className="text-sm md:text-lg mt-3">No comments yet.</p>
            ) : (
                comments.map((comment) => (

                    <div key={comment._id} className="border-b border-b-gray-700 py-4">

                        <h2 className="font-semibold text-xl md:text-2xl">

                            {comment.name + " "}

                            <span className="text-xs md:text-sm font-light">
                                {new Date(comment.date).toLocaleDateString()}
                            </span>

                        </h2>

                        <p className="text-sm md:text-lg mt-3">{comment.comment}</p>

                    </div>
                ))
            )}
        </div>
    )
}