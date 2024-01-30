import './Button.css'
import React from 'react'

export default function Button({children}) {
  return (
    <button className="button">
    <span className="button-content">
        {children}
    </span>
</button>
  )
}

