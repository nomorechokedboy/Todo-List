import React from "react"
import LoginInput from "../LoginInput"
import LoginButton from "../LoginButton"
import styles from "./loginContainer.module.css"

export default function loginContainer() {
	return (
		<>
			<div className={styles.loginContainer}>
				<form className={styles.loginForm}>
					<LoginInput />
				</form>
				<LoginButton btnClass={styles.loginBtn} value="Login" />
			</div>
		</>
	)
}
