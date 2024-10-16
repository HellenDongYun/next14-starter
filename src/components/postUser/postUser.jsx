import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";
import Image from "next/image";

const PostUser = async ({ userId }) => {
  const user = await getUser(userId);
  console.log(user);
  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={user?.img || "/noavatar.png"}
        alt="avatar image"
        width={50}
        height={50}
      ></Image>
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>
          {user?.username || "Jerry Jerfferson"}
        </span>
      </div>
    </div>
  );
};

export default PostUser;
