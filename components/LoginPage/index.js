import React from 'react'
import LoginImage from "../shards/LoginImage"
import LoginContainer from "../shards/LoginContainer"
import styles from "./loginPage.module.css"
import LoginButton from "../shards/LoginButton"

export default function index() {
    return (
		<div className={styles.container}>
			<LoginImage />
            <LoginContainer />

            <div className={styles.signupSlogan}>
                Doesn&apos;t have an account?
            </div>

            <LoginButton
                className={styles.signupBtn} value="Signup">
            </LoginButton>
		</div>
	)
}
