import { useState } from "react";
import { googleLoginStatus } from "../../../pages/api/getUser";
import { useGoogleLogin } from "react-google-login";
import { useRouter } from "next/router";
import Image from "next/image";
import SuccessPopup from "../../shards/SuccessPopup";
import { GOOGLE_CLIENT_ID } from "../../../config";
import styles from "./googleButton.module.css";

export default function GoogleButton() {
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const onSuccess = async (res: any): Promise<void> => {
    const token = res.getAuthResponse().id_token; // get Gulu Gulu token

    const [success, _] = await googleLoginStatus(token);

    if (success) {
      setSuccess(true);

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
