"use server";

import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import { connectToDb } from "./connectToDb";
import { Post, User } from "./models";

export const addPost = async (formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newPost = new Post({ title, desc, slug, userId });
    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return { error: "something went wrong!" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return { error: "something went wrong!" };
  }
};

export const handleRegister = async (formData) => {
  const { userName, email, password, passwordRepeat } =
    Object.fromEntries(formData);
  if (password !== passwordRepeat) {
    return "password does not match";
  }
  try {
    connectToDb();
    const user = await User.findOne({ email });
    if (user) {
      return "user already exist !";
    }
    const newUser = new User({
      userName,
      email,
      password,
      passwordRepeat,
    });
    await newUser.save();
    console.log("saved to DB ! ");
  } catch (error) {
    console.log(error);
    return { error: "something went wrong !" };
  }
};

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
};
