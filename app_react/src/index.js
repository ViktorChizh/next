import React from "react"
import * as ReactDOMClient from "react-dom/client"

const elements = (<div>
    <h1>HELLO</h1>
    <h2>HELLO</h2>
</div>)

const app = ReactDOMClient.createRoot(document.getElementById('app'))

app.render(elements)