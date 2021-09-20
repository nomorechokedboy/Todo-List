import React from "react"
import styles from "./loginTextBox.module.css"

export default function loginTextBox({iconClass, inputName, placeholder, type}) {
	return (
		<div className={styles.inputDiv}>
			<span className={styles.inputName}>{inputName}</span>
			<div>
				<div className={styles.iconDiv}>
					<i className={iconClass}></i>
				</div>
				<input
					className={styles.input}
					placeholder={placeholder}
					type={type}
				/>
			</div>
		</div>
	)
}