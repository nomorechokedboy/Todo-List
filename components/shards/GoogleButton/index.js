import React from "react"
import styles from "./googleButton.module.css"
import googleIcon from "../../../public/googleIcon.png"
import Image from "next/image"

export default function GoogleButton({ isSignup }) {
	return (
		<>
			{!isSignup && (
				<div className={styles.ggBtn}>
					<div className={styles.icon}>
						<Image
							src={googleIcon}
							alt="Google icon"
							width={30}
							height={30}
						/>
					</div>
					<span className={styles.btnText}>Signin with Google</span>
				</div>
			)}
		</>
	)
}
