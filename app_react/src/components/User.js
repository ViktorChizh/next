import React from "react"
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'

export default class User extends React.Component {
    render() {
        return (
            <div className="user">
                <IoCloseCircleSharp className="delete-icon"/>
                <IoHammerSharp className="edit-icon"/>
                <h3>{this.props.user.firstName} {this.props.user.lastName}</h3>
                <p>{this.props.user.bio}</p>
                <b>{this.props.user.isHappy ? 'Счастлив :)' : 'Не особо :('}</b>
            </div>
        )
    }
}