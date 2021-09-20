import React from "react"
import LoginContainer from "../shards/LoginContainer"
import LoginButton from "../shards/LoginButton"
import styles from "./loginPage.module.css"
import Image from "next/image"
import loginImage from "../../public/loginImage.jpg"
import logo from "../../public/logo.png"

export default function index() {
	return (
		<div className={styles.container}>
            {/* <Image className={styles.logo} src={logo} alt="StikiNote logo" />
			<span className={styles.pageName}>StikiNote</span> */}
			<div className="img">
				<Image
					className={styles.image}
					src={loginImage}
					alt="A peaceful view"
				/>
			</div>
			<LoginContainer />
			<div className={styles.signupSlogan}>
				Doesn&apos;t have an account?
			</div>
			<LoginButton btnClass={styles.signupBtn} value="Signup" />
		</div>
	)
}
