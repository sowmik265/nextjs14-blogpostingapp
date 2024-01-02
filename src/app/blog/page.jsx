import PostCard from "@/components/post-card/PostCard";
import styles from "./blog.module.css";

const Blog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <PostCard></PostCard>
      </div>
      <div className={styles.post}>
        <PostCard></PostCard>
      </div>
      <div className={styles.post}>
        <PostCard></PostCard>
      </div>
      <div className={styles.post}>
        <PostCard></PostCard>
      </div>
    </div>
  );
};

export default Blog;
