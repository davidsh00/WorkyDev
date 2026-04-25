import Image from "next/image";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import FormControl from "@/components/formControl";
import Button from "@/components/button";

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
        <div className={`${styles["login-box"]}`}>
          <Image
            className={`${styles["login-image"]}`}
            alt="login-background"
            src="/assets/images/login_bg.png"
            width={1000}
            height={1000}
          />
          <div className={`${styles["login-left"]}`}>
            <div className={`${styles["login-text"]}`}>
              <h1>Welcome to WORKY</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                adipisci, ratione, rerum quas distinctio modi culpa enim
                mollitia ad reprehenderit quam nisi exercitationem eligendi,
                incidunt accusantium eius! Possimus, nobis voluptatem.
              </p>
            </div>
          </div>
          <div className={`${styles["login-right"]}`}>
            <form className={`${styles["login-form"]}`}>
              <Image src={"/favicon.ico"} width={100} height={100} title="WorkyDev Logo"/>
              <h2 className="form-title">USER LOGIN</h2>
              <FormControl
                type={"text"}
                FaIcon="FaUser"
                placeHolder="Username"
                name="user_name"
              />
              <FormControl
                type={"password"}
                FaIcon="FaKey"
                placeHolder="Password"
                name="user_password"
              />
              <Button lable="Login" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
