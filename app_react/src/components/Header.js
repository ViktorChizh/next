import React from "react"

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <p>{this.props.title}</p>
            </header>
        )
    }
}