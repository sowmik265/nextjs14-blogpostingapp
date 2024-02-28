import PostCard from "@/components/post-card/PostCard";
// import { getPosts } from "@/lib/data";
import styles from "./blog.module.css";

//fetch data with an API
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

const Blog = async () => {
  //fetch data without an API
  // const posts = await getPosts();

  //fetch data with an API
  const posts = await getData();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post}></PostCard>
        </div>
      ))}
    </div>
  );
};

export default Blog;
