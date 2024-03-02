"use client";
import { handleLogout } from "@/lib/action";
import Image from "next/image";
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navlink/NavLink";

const links = [
  {
    title: "Home",
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
  {
    title: "Write Blogs",
    path: "/addblog",
  },
];

const Links = ({ session }) => {
  const [open, setOpen] = useState(false);

  // const isAdmin = true;

  return (
    <div className={styles.container}>
      {/* large device menu */}
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title}></NavLink>
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }}></NavLink>
            )}
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }}></NavLink>
        )}
      </div>
      {/* end */}
      {/* small device menu */}
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      ></Image>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title}></NavLink>
          ))}
        </div>
      )}
      {/* end */}
    </div>
  );
};

export default Links;
