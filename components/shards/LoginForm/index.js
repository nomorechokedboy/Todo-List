import React from "react"
import LoginTextBox from "../LoginTextBox"
import styles from "./loginForm.module.css"

export default function LoginForm({ isSignup}) {
	return (
		<form>
			{isSignup && (
				<LoginTextBox
					type="text"
					placeholder="Enter your full name"
					inputName="Fullname"
                    iconClass="fas fa-user-circle fa-2x"
				/>
			)}
			<LoginTextBox
				type="text"
				placeholder="Enter your username"
				inputName="Username"
                iconClass="fas fa-user-circle fa-2x"
			/>
			<LoginTextBox
				type="password"
				placeholder="Enter your password"
				inputName="Password"
				iconClass="fas fa-lock fa-2x"
			/>
			{isSignup && (
				<LoginTextBox
					type="password"
					placeholder="Re-enter your password"
					inputName="Re-password"
					iconClass="fas fa-lock fa-2x"
				/>
			)}
			{!isSignup && (
				<div className={styles.loginBtnWrapper}>
					<button type="submit" className={styles.loginBtn}>
						Login
					</button>
				</div>
			)}
		</form>
	)
}
