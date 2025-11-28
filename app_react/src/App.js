import React from "react"
import Header from "./components/Header"
import Users from "./components/Users"
import AddUser from "./components/AddUser"
import axios from "axios"
export default class App  extends React.Component {
    constructor(props) {
        super(props)

        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            this.setState({users: res.data.map(u => ({
                id: u.id,
                firstName: u.name.split(' ')[0],
                lastName:  u.name.split(' ')[1],
                bio: u.company.catchPhrase,
                age: Math.floor(Math.random() * (50 - 20 + 1)) + 20,
                isHappy: Math.random() < 0.5 ? 0 : 1
            }))})
        })

        this.state={
            users: []
        }
        this.addUser=this.addUser.bind(this)
        this.deleteUser=this.deleteUser.bind(this)
        this.editUser=this.editUser.bind(this)
    }
    render() {
        return (
            <div>
                <Header title="СПИСОК ПОЛЬЗОВАТЕЛЕЙ"/>
                <main>
                    <Users users={this.state.users} onDelete={this.deleteUser} onEdit={this.editUser}/>
                </main>
                <aside>
                    <AddUser onAdd={this.addUser}/>
                </aside>
            </div>
        )
    }

    addUser(user) {
        const id = this.state.users.length ? this.state.users[this.state.users.length-1].id + 1 : 1
        this.setState({users: [...this.state.users, {id, ...user}]})
    }
    deleteUser(id) {
        this.setState({
            users: this.state.users.filter(el => el.id !== id)
        })
    }
    editUser(user) {
        this.setState({users:[...this.state.users].map(u=> u.id===user.id ? user : u)})
    }
}