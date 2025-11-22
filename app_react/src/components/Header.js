import React from "react"

export class Header extends React.Component {
    render() {
        return (
            <header className="header">
                {this.props.title}
            </header>
        )
    }
}