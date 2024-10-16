import Image from "next/image";
import styles from "./singlePostPage.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={post.img}
            alt="contact image"
            fill
          ></Image>
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userid} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toLocaleDateString("en-NZ", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
