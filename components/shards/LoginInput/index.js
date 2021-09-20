import React from "react"
import LoginTextBox from "../LoginTextBox"
import styles from "./loginInput.module.css"

export default function index() {
	return (
		<>
			<LoginTextBox
				className={styles.user}
				placeholder="Input your username"
				inputName="Username"
				iconName="user-circle"
			></LoginTextBox>
			<LoginTextBox
				className={styles.password}
				placeholder="Input your password"
				inputName="Password"
				iconName="lock"
			></LoginTextBox>
		</>
	)
}
