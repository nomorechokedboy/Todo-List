import React from "react"
import LoginInput from "../LoginInput"
import LoginButton from "../LoginButton"
import GoogleButton from "../GoogleButton"
import Image from "next/image"
import pageLogo from "../../../public/logo.png"
import styles from "./loginContainer.module.css"

export default function loginContainer() {
	return (
		<div className={styles.loginContainer}>
			<div className={styles.logoDiv}>
				<Image
					src={pageLogo}
					alt="StikiNote logo"
					width={100}
					height={100}
				/>
				<span className={styles.pageName}>StikiNote</span>
			</div>

			<GoogleButton />

			<form className={styles.loginForm}>
				<LoginInput />
				<LoginButton
					className={styles.loginBtnDiv}
					btnClass={styles.loginBtn}
					value="Login"
				/>
			</form>

			<div>
				<div className={styles.signupSlogan}>
					Doesn&apos;t have an account?
					<i className="fas fa-arrow-down fa"></i>
				</div>
				<LoginButton btnClass={styles.signupBtn} value="Signup" />
			</div>
		</div>
	)
}
