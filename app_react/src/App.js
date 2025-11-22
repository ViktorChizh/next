import React from "react"
import {Header} from "./components/Header"
import { Image } from "./components/Image"
import logo from './img/logo.svg'


class App  extends React.Component {
    helpText = 'Help text'
    inputClick() {console.log('Clicked')}
    mouseOver()  {console.log('Mouse Over')}
    render() {
        return (
            <div className="name">
                <Header title="ШАПКА САЙТА"/>
                <h1>{this.helpText}</h1>
                <input placeholder={this.helpText}
                    onClick={this.inputClick}
                    onMouseEnter={this.mouseOver}/>
                <p>{this.helpText === 'Help text' ? 'Yes' : 'No'}</p>
                <Image image={logo} />
            </div>
        )
    }
}

export default App