import { handleGithubLogin } from "@/lib/action";

const Login = async () => {
  // const session = await auth();
  // console.log(session);

  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with Github</button>
      </form>
    </div>
  );
};

export default Login;
