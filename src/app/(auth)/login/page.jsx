import { handleGithubLogin, handleLogin } from "@/lib/action";

const Login = async () => {
  // const session = await auth();
  // console.log(session);

  return (
    <div>
      <form action={handleLogin}>
        <input type="text" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <button>Login</button>
      </form>
      <form action={handleGithubLogin}>
        <button>Login with Github</button>
      </form>
    </div>
  );
};

export default Login;
