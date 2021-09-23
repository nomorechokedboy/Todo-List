import React from "react"
import LoginContainer from "../shards/LoginContainer"
import styles from "./loginPage.module.css"
import Image from "next/image"
import loginImage from "../../public/loginImage.jpg"

export default function index() {
	return (
		<div className={styles.container}>
			<div className={styles.imageWrapper}>
				<Image
					src={loginImage}
					alt="A peaceful view"
					className={styles.img}
				/>
			</div>
			<LoginContainer />
		</div>
	)
}
