import Head from "next/head";
import styles from "@/styles/Login.module.css";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login Page</title>
        <meta name="description" content="login or signup user" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.page}`}>
        <div className={`${styles["login-box"]}`}></div>
      </div>
      hello world
    </>
  );
}
