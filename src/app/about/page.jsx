import Image from "next/image";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>Lorem, ipsum.</h2>
        <h1 className={styles.title}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          suscipit sequi.
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          laudantium minima impedit cum commodi atque, sit modi optio dicta
          possimus esse amet officiis tempore sint fugit pariatur laboriosam
          similique nobis repellendus ipsa voluptate. Iusto eaque at sunt atque
          molestias ad autem dolor officia in quasi?
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 +</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 +</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 +</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="" fill className={styles.img}></Image>
      </div>
    </div>
  );
};

export default About;
