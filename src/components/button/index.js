import React from 'react'
import './style.css'

function Button({ text, className, onclick }) {
    return (
        <div>
            <button onClick={onclick} className={" btn " + className}>
                {text}
            </button>
        </div>
    )
}

export default Button