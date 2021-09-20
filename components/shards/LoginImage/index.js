import React from 'react'
import loginImage from "../../../public/loginImage.jpg"
import Image from "next/image"

export default function index() {
    return (
			<div className="img">
				<Image src={loginImage} alt="A peaceful view" />
			</div>
	)
}
