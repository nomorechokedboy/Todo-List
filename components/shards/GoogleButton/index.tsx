import { useState } from "react";
import Image from "next/image";
import SuccessPopup from "../../shards/SuccessPopup";
import { googleLoginStatus } from "../../../pages/api/getUser";
import { useGoogleLogin } from "react-google-login";
import { useRouter } from "next/router";
import styles from "./googleButton.module.css";

export default function GoogleButton() {
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const onSuccess = async (res: any) => {
    const token = res.getAuthResponse().id_token;

    const response = await googleLoginStatus(token);

    if (response.success) {
      setSuccess(true);
      setTimeout(() => {
        router.push("/todomain");
      }, 1000);
    }
  };

  const clientId =
    "189123061547-hjo6ql91vbacqkqn44idjme2fkav0mpt.apps.googleusercontent.com";

  const onFailure = (res: any) => {
    console.log("Login failed: res:", res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  });

  return (
    <>
      {success && <SuccessPopup name="Login" />}
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
