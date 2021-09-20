import React from "react"
import LoginTextBox from "../LoginTextBox"

export default function loginInput() {
	return (
		<>
			<LoginTextBox
				type="text"
				placeholder="Input your username"
				inputName="Username"
				iconClass="fas fa-user-circle fa-lg"
			/>
			<LoginTextBox
				type="password"
				placeholder="Input your password"
				inputName="Password"
				iconClass="fas fa-lock fa-lg"
			/>
		</>
	)
}
