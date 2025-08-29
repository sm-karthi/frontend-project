import { NextResponse } from "next/server";
import Comment from "./models/comments";
import db from "./db/connection";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    await db.connect();

    const comment = new Comment(data);

    await comment.save();

    return NextResponse.json({ message: "Comment saved" });

  } catch (error) {

    console.error(error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });

  } finally {
    await db.close()
  }
}



export async function GET(request: Request) {
  try {

    const url = new URL(request.url);
    const blogId = url.searchParams.get("blogId");

    await db.connect();

    const comments = await Comment.find({ blogId }).sort({ date: -1 })

    return NextResponse.json(comments)

  } catch (error) {

    console.log(error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 })

  } finally {
    await db.close()
  }
}

