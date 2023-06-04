import Link from "next/link";
import styles from "@/styles/error.module.scss";

export default function Custom404() {
  return (
    <>
      <h1 className={styles.error}>404 - Page Not Found</h1>
      <p>
        Please go back to
        <Link href={"/"}>home page </Link>
      </p>
    </>
  );
}
