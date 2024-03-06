import LoginForm from "@/components/loginform/loginForm";
import { handleGithubLogin } from "@/lib/action";
import styles from "./login.module.css";

const Login = () => {
  // const session = await auth();
  // console.log(session);
  

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <LoginForm></LoginForm>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
