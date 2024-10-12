import Image from "next/image";
import styles from "./contact.module.css";
const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/contact.png"
          alt="Contact image"
          fill
          className={styles.img}
        ></Image>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number(optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            row="10"
            placeholder="message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
