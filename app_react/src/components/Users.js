import React from "react"

export default class Users extends React.Component {
    users = [
        {
            id: 1,
            firstName: 'Bob',
            lastName: 'Marley',
            bio: 'Lorem ipsum...',
            age: 40,
            isHappy: true
        },
        {
            id: 2,
            firstName: 'John',
            lastName: 'Doe',
            bio: 'Lorem ipsum...',
            age: 22,
            isHappy: false
        }
    ]
    render() {
        if(this.users.length>0)
            return (
                <div>
                    {
                        this.users.map(el => (
                            <div key={el.id} className="user">
                                <h3>{el.firstName} {el.lastName}</h3>
                                <p>{el.bio}</p>
                                <b>{el.isHappy ? 'Счастлив :)' : 'Не особо :('}</b>
                            </div>
                        ))
                    }
                </div>
            )
        else
            return (
                <div className="user">
                    <h3>Пользователей нет</h3>
                </div>
            )
    }
}