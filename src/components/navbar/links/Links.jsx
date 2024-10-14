"use client";
import Link from "next/link";
import styles from "./links.module.css";
import NavLink from "./navLinks/navLink";
import { useState } from "react";
import Image from "next/image";
const Links = () => {
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  //temperary
  const session = true;
  const isAdmin = true;

  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "login", path: "/login" }} />
        )}
      </div>
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt="menu image"
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      ></Image>

      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink key={link.title} item={link} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
