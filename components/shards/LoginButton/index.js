import React from "react"

export default function index(props) {
    return (
        <input
            className={props.className}
            type="submit"
            value={props.value}
        />
    )
}
