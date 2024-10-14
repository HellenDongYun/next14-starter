import Image from "next/image";
import styles from "./singlePostPage.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="/contact.png"
          alt="contact image"
          fill
        ></Image>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="/noavatar.png"
            alt="avatar image"
            width={50}
            height={50}
          ></Image>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
          laborum, aliquid quod impedit doloremque itaque quis illo perferendis
          voluptatem molestias. Deserunt ipsa odit iure esse similique ad iste
          pariatur, natus fugit fugiat autem ducimus accusamus assumenda iusto
          commodi totam impedit nulla quo quibusdam odio inventore fuga quis
          corrupti. Quasi, asperiores.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
