import React from "react"
import styles from "./SignupButton.module.css"

export default function SignupButton({ isSignup, onClick }) {
	return (
		<div>
			{!isSignup && (
				<div className={styles.signupText}>
					Doesn&apos;t have an account?
					<i className="fas fa-arrow-down fa"></i>
				</div>
			)}
			<div className={styles.signupBtnWrapper}>
				<button className={styles.signupBtn} onClick={onClick}>
					Signup
				</button>
			</div>
		</div>
	)
}
