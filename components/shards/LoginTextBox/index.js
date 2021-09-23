import React from "react"
import styles from "./loginTextBox.module.css"

function inputNameAreEqual(prev, next) {
	return prev.inputName === next.inputName
}

function LoginTextBox({ iconClass, inputName, placeholder, type }) {
	console.log("cc")
	return (
		<div className={styles.inputDiv}>
			<span className={styles.inputName}>{inputName}</span>
			<div className={styles.textBox}>
				<div className={styles.iconDiv}>
					<i className={iconClass}></i>
				</div>
				<input
					className={styles.input}
					placeholder={placeholder}
					type={type}
					// onChange={handleChange}
					// value={value}
				/>
			</div>
		</div>
	)
}

export default React.memo(LoginTextBox, inputNameAreEqual)
