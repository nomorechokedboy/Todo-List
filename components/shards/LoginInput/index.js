import React from "react"
import LoginTextBox from "../LoginTextBox"

export default function loginInput() {
	return (
		<>
			<LoginTextBox
				type="text"
				placeholder="Enter your username"
				inputName="Username"
				iconClass="fas fa-user-circle fa-2x"
			/>
			<LoginTextBox
				type="password"
				placeholder="Enter your password"
				inputName="Password"
				iconClass="fas fa-lock fa-2x"
			/>
		</>
	)
}
