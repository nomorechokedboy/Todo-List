import React from "react"
import LoginInput from "../LoginInput"
import LoginButton from "../LoginButton"
import styles from "./loginContainer.module.css"

export default function index() {
	return (
		<div className={styles.loginContainer}>
			<form className={styles.loginForm}>
				<LoginInput></LoginInput>
				<LoginButton
					className={styles.loginBtn}
					value="Login"
				></LoginButton>
			</form>
		</div>
	)
}
