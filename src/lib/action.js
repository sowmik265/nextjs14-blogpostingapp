"use server";

import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import { connectToDb } from "./connectToDb";
import { Category, Post, User } from "./models";

export const addPost = async (prevState, formData) => {
  const { title, desc, slug, userId, category } = Object.fromEntries(formData);
  console.log(title, desc, slug, userId, category);
  try {
    connectToDb();
    const newPost = new Post({ title, desc, slug, userId, category });
    await newPost.save();
    console.log("saved to db");
    // revalidatePath("/blog");
    revalidatePath("/admin");
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
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "something went wrong!" };
  }
};

export const addCategory = async (formData) => {
  const { name } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newCategory = new Category({ name });
    await newCategory.save();
    console.log("saved to db");
    // revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return { error: "something went wrong!" };
  }
};

export const addUser = async (prevState, formData) => {
  const { userName, email, password, img } = Object.fromEntries(formData);
  // console.log(title, desc, slug, userId, category);
  try {
    connectToDb();
    const newUser = new User({ userName, email, password, img });
    await newUser.save();
    console.log("saved to db");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "something went wrong!" };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "something went wrong!" };
  }
};

export const handleRegister = async (prevState, formData) => {
  const { userName, email, password, passwordRepeat } =
    Object.fromEntries(formData);
  if (password !== passwordRepeat) {
    return { error: "Password Doesn't matched !" };
  }
  try {
    connectToDb();
    const user = await User.findOne({ email });
    if (user) {
      return { error: "user already exist !" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
      passwordRepeat,
    });
    await newUser.save();
    console.log("saved to DB ! ");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "something went wrong !" };
  }
};

export const handleLogin = async (prevState, formData) => {
  const { email, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { email, password });
  } catch (error) {
    console.log(error);

    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid email or password" };
    }
    throw error;
  }
};

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
};
