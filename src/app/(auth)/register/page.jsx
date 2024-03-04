import RegisterForm from "@/components/registerform/RegisterForm";
import styles from "./register.module.css";
const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RegisterForm></RegisterForm>
      </div>
    </div>
  );
};

export default Register;
