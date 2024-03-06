
import { addPost, deletePost } from "@/lib/action";
import { getCategories } from "@/lib/data";
// import { useState } from "react";
import styles from "./addblog.module.css";

const writeBlogs = async () => {
  const categories = await getCategories();
  // const [selectedCategory, setSelectedCategory] = useState('');

  // const handleChange = (event) => {
  //   setSelectedCategory(event.target.value);
  // };
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

        <label className={styles.labelStyle} htmlFor="title">
          Category:
        </label>
        <br />
        <select id="category_name" name="category">
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        {/* <br />
        <input type="text" id="title" name="category" /> */}

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
      <div>
        {categories.map((category) => (
          <div key={category.id}>
            <h1>{category.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default writeBlogs;
