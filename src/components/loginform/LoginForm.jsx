"use client";

import { handleLogin } from "@/lib/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { useEffect } from "react";
import { useFormState } from "react-dom";
import styles from "./loginform.module.css";

const LoginForm = () => {
  const [state, formAction] = useFormState(handleLogin, undefined);

  const router = useRouter();

  //   useEffect(() => {
  //     state?.success && router.push("/login");
  //   }, [state?.success, router]);
  return (
    <form className={styles.form} action={formAction}>
      <input type="email" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't Have an account?"} <b>Login</b>
      </Link>
    </form>
  );
};

export default LoginForm;
