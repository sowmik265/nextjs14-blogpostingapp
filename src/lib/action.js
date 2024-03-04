"use server";

import bcrypt from "bcrypt";
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

export const handleRegister = async (previousState, formData) => {
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

export const handleLogin = async (previousState, formData) => {
  const { email, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { email, password });
  } catch (error) {
    console.log(error);

    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid email or password" };
    }
    return { error: "something went wrong !" };
  }
};

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
};
