import styles from "@/styles/Home.module.scss";
import Link from "next/link";

export default function Homepage() {
  return (
      <main className={`${styles.Homepage}`}>
        <img className={styles.HomePic} src={"/image/ai-image.jpg"} alt="futuristic" />
        <h1>Generate Art from text</h1>
        <Link className={styles.Button} href="generate">Get Started</Link>
      </main>
  );
};
