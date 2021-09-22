import React from "react"
import styles from "./loginButton.module.css"

export default function loginButton({ value, btnClass, className }) {
	return (
		<div className={className}>
			<input
				className={`${styles.btn} ${btnClass}`}
				type="submit"
				value={value}
			/>
		</div>
	)
}