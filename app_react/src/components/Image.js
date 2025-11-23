import React from "react"

export class Image extends React.Component {
    render() {
        return (
            <img src={this.props.image} alt='' width={this.props.width} height={this.props.height}/>
        )
    }
}