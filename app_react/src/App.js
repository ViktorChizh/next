import React from "react"
import Header from "./components/Header"
import Image from "./components/Image"
import logo from './img/logo.svg'


export default class App  extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            helpText: 'Help text',
            userData: ''
        }
        this.inputClick = this.inputClick.bind(this)
    }

    inputClick() {
        this.setState({helpText: 'Changed'})
        console.log('Clicked')
    }
    mouseOver()  {
        console.log('Mouse Over')
    }
    render() {
        return (
            <div className="name">
                <Header title="ШАПКА САЙТА"/>
                <h1>{this.state.helpText + " !!!"}</h1>
                <h2>{this.state.userData}</h2>
                <input
                    placeholder={this.state.helpText}
                    onChange={event => this.setState({userData: event.target.value})}
                    onClick={this.inputClick}
                    onMouseEnter={this.mouseOver}
                />
                <p>{this.state.helpText === 'Help text' ? 'Yes' : 'No'}</p>
                <Image image={logo} width="180px" height="180px" alt="logo"/>
            </div>
        )
    }
}