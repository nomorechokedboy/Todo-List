import React, { useState } from "react"
import GoogleButton from "../GoogleButton"
import LoginForm from "../LoginForm"
import SignupButton from "../SignupButton"
import Image from "next/image"
import pageLogo from "../../../public/newLogo.png"
import styles from "./loginContainer.module.css"

export default function LoginContainer() {
	const [isSignup, setIsSignup] = useState(false)

	const handleChange = () => {
		setIsSignup(!isSignup)
	}

	return (
		<div className={styles.loginContainer}>
			<div className={styles.logoWrapper}>
				<Image
					src={pageLogo}
					alt="StikiNote logo"
				/>
				<span className={styles.pageName}>StikiNote</span>
			</div>
			<GoogleButton isSignup={isSignup} />
			<LoginForm isSignup={isSignup} />
			<SignupButton isSignup={isSignup} onClick={handleChange} />
		</div>
	)
}