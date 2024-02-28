import { addPost, deletePost } from "@/lib/action";
import styles from "./addblog.module.css";

const writeBlogs = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1Style}>Create Post</h1>

      <form className={styles.formStyle} action={addPost}>
        <label className={styles.labelStyle} htmlFor="title">
          Title:
        </label>
        <br />
        <input type="text" id="title" name="title" />
        <br />
        <br />

        <label className={styles.labelStyle} htmlFor="description">
          Description:
        </label>
        <br />
        <textarea
          className={styles.textareaStyle}
          id="description"
          name="desc"
        ></textarea>
        <br />
        <br />

        <label className={styles.labelStyle} htmlFor="slug">
          Slug:
        </label>
        <br />
        <input type="text" id="slug" name="slug" />
        <br />
        <br />

        <label className={styles.labelStyle} htmlFor="userId">
          User ID:
        </label>
        <br />
        <input type="text" id="userId" name="userId" />
        <br />
        <br />

        <button className={styles.buttonStyle} type="submit">
          Create Post
        </button>
      </form>

      <form action={deletePost}>
        <input type="text" placeholder="postId" name="id" />
        <button>Delete</button>  
      </form>
    </div>
  );
};

export default writeBlogs;
