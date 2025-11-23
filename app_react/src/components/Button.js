import React, { useState, useEffect } from "react"

const Button = ({ text = "button" }) => {
    const [click, setClick] = useState(0)

    useEffect(()=>{
        document.title = `React ${click}`
    })
    return (
        <button onClick={()=>setClick(click+1)}>
            {text + ' ' + click}
        </button>
    )
}

export default Button