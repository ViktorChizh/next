import React from "react"
import Button from "./Button"

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <p>{this.props.title}</p>
                <Button text="Click"/>
            </header>
        )
    }
}