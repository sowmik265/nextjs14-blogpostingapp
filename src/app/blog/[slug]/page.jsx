import { getPost } from "@/lib/data";
import Image from "next/image";
import styles from "./singlePost.module.css";

// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src={post.img}
          alt=""
          fill
        ></Image>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/16817504/pexels-photo-16817504/free-photo-of-a-woman-standing-on-a-seashore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={50}
            height={50}
          ></Image>
          {/* <Suspense fallback={<div>Loading....</div>}>
            <PostUser userId={post.userId}></PostUser>
          </Suspense> */}

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{post.createdAt.toString().slice(0,16)}</span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
