import React from "react"

export default class AddUser extends React.Component {
        userAdd = {}
        constructor(props) {
        super(props)
        this.state={
            firstName: this.props.user ? this.props.user.firstName : '',
            lastName: this.props.user ? this.props.user.lastName : '',
            bio: this.props.user ? this.props.user.bio : '',
            age: this.props.user ? this.props.user.age : 0,
            isHappy: this.props.user ? this.props.user.isHappy : false
        }
    }
    render() {
        return (
            <form>
                <input placeholder="FirstName" value={this.state.firstName} onChange={(e)=>this.setState({firstName: e.target.value})}/>
                <input placeholder="LastName" value={this.state.lastName} onChange={(e)=>this.setState({lastName: e.target.value})}/>
                <textarea placeholder="Bio" value={this.state.bio} onChange={(e)=>this.setState({bio: e.target.value})}></textarea>
                <input placeholder="Age" value={this.state.age} onChange={(e)=>this.setState({age: e.target.value})}/>
                <label htmlFor="isHappy">Счастлив?</label>
                <input type="checkbox" id="isHappy" checked={this.state.isHappy} onChange={(e)=>this.setState({isHappy: e.target.checked})}/>
                <button type="button" onClick={()=> {
                        this.userAdd = {
                            firstName: this.state.firstName,
                            lastName: this.state.lastName,
                            bio: this.state.bio,
                            age: this.state.age,
                            isHappy: this.state.isHappy
                        }
                        if (this.props.user) this.userAdd.id = this.props.user.id
                        this.props.onAdd(this.userAdd)
                        if (!this.props.user) {
                            this.setState({
                                firstName: '',
                                lastName: '',
                                bio: '',
                                age: 0,
                                isHappy: false
                            })}
                    }
                }>{this.props.user ? 'ИЗМЕНИТЬ' : 'ДОБАВИТЬ'}</button>
            </form>
        )
    }
}