import React from "react"

export default  class Image extends React.Component {
    render() {
        return (
            <img
                src={this.props.image}
                width={this.props.width}
                height={this.props.height}
                alt={this.props.alt  || ''}
            />
        )
    }
}