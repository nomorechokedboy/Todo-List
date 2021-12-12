import { useState } from "react";
import { googleLoginStatus } from "../../../lib/api/user";
import { useGoogleLogin } from "react-google-login";
import { setLoginUser } from "../../../redux/loginUser/action";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Image from "next/image";
import LoginPopup from "../../shards/LoginPopup";
import { GOOGLE_CLIENT_ID } from "../../../config";
import styles from "./googleButton.module.scss";
import { setStorageWithExpiry } from "../../../lib/utils";

export default function GoogleButton() {
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const onSuccess = async (res: any) => {
    const id_token = res.getAuthResponse().id_token; // get Gulu Gulu token

    setIsWaiting(true);
    const [token, _] = await googleLoginStatus(id_token);

    if (token) {
      const ttl = 604_800_000; // 7 days
      setStorageWithExpiry("token", token, ttl);

      dispatch(setLoginUser({ token, setLocal: true }));
      setIsWaiting(false);
      setIsLoginSuccess(true);

      setTimeout(() => {
        router.push("/todomain");
      }, 1000);
    }
  };

  const onFailure = (res: any): void => {
    console.log("Login failed: ", res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId: GOOGLE_CLIENT_ID,
    accessType: "offline",
  });

  return (
    <>
      {isLoginSuccess && (
        <LoginPopup success={isLoginSuccess} text="Login Successfully!" />
      )}
      {isWaiting && <LoginPopup success={isLoginSuccess} text="Waiting..." />}
      <div onClick={signIn} className={styles.ggBtn}>
        <div className={styles.icon}>
          <Image
            src="/googleIcon.png"
            alt="Google icon"
            width={30}
            height={30}
          />
        </div>
        <span className={styles.btnText}>Signin with Google</span>
      </div>
    </>
  );
}
