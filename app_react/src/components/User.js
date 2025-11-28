import React from "react"
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'
import AddUser from "./AddUser"

export default class User extends React.Component {
        constructor(props) {
        super(props)
        this.state={
            editForm: false
        }
    }
    render() {
        return (
            <div className="user">
                <IoCloseCircleSharp className="delete-icon" onClick={()=>this.props.onDelete(this.props.user.id)}/>
                <IoHammerSharp className="edit-icon" onClick={()=>this.setState({editForm: !this.state.editForm})}/>
                <h3>{this.props.user.firstName} {this.props.user.lastName}</h3>
                <p>{this.props.user.bio}</p>
                <b>{this.props.user.isHappy ? 'Счастлив :)' : 'Не особо :('}</b>

                {this.state.editForm && <AddUser user={this.props.user} onAdd={this.props.onEdit}/>}

            </div>
        )
    }

}