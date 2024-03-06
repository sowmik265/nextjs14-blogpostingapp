import { unstable_noStore } from "next/cache";
import { connectToDb } from "./connectToDb";
import { Category, Post, User } from "./models";

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user");
  }
};

export const getUser = async (id) => {
  unstable_noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users");
  }
};

export const getCategories = async () => {
  unstable_noStore();
  try {
    connectToDb();
    const categories = await Category.find();
    return categories;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch categories");
  }
};
