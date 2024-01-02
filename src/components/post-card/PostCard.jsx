import Image from "next/image";
import Link from "next/link";
import styles from "./postCard.module.css";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/16817504/pexels-photo-16817504/free-photo-of-a-woman-standing-on-a-seashore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill className={styles.img}></Image>
        </div>
        <span className={styles.date}>02.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta iure ab ipsum ad totam, incidunt dolore quisquam aut, sequi quibusdam deleniti corporis commodi maxime soluta, reprehenderit necessitatibus optio iusto consectetur. Quis rem voluptates aliquid blanditiis.</p>
        <Link className={styles.link} href="/blog/post">READ MORE</Link>
      </div>
    </div>
  );
};

export default PostCard;
