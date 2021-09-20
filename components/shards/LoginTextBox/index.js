import React from "react"
import styles from "./loginTextBox.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function index(props) {
	return (
		<div className={`${styles.inputDiv} ${props.className}`}>
			<h5>{props.inputName}</h5>
			<div>
				<div className={styles.iElem}>
					{/* <FontAwesomeIcon
						className={styles.fontAweSome}
						icon={props.iconName}
						size={70}
					/> */}
				</div>
				<input
					className={styles.input}
					placeholder={props.placeholder}
					type="text"
				/>
			</div>
		</div>
	)
}