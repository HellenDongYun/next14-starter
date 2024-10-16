import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const [slug] = params;
  try {
    await connectToDb();
    const post = await Post.findOne(slug);
    return NextResponse.json(post);
  } catch (error) {
    console.log("something went wrong while get post!");
    throw new Error("failed to fetch post!");
  }
};
export const DELETE = async (request, { params }) => {
  const [slug] = params;
  try {
    await connectToDb();
    await Post.deleteOne(slug);
    return NextResponse.json("post deleted");
  } catch (error) {
    console.log("something went wrong while get post!");
    throw new Error("failed to delete post!");
  }
};
