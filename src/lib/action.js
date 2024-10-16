"use server";
import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";

export const addPost = async (formData) => {
  // const title = formData.get("title");
  // const desc = formData.get("desc");
  // const slug = formData.get("slug");
  // const userid = formData.get("userId");
  const { title, desc, slug, userId } = Object.fromEntries(formData);
  try {
    await connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    await newPost.save();
    revalidatePath("/blog");
    console.log("saved to DB");
  } catch (error) {
    console.log(error);
    return { error: "something went wrong!" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    await connectToDb();
    await Post.findByIdAndDelete(id);
    revalidatePath("/blog");
    console.log("item is  deleted!");
  } catch (error) {
    console.log(error);
    return { error: "something went wrong while delete post!" };
  }
};
