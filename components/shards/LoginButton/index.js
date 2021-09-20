import React from "react"
import styles from "./loginButton.module.css"

export default function loginButton({value, btnClass, }) {
    return (
        <input
            className={`${styles.btn} ${btnClass}`}
            type="submit"
            value={value}
        />
    )
}
