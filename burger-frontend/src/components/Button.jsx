import React from 'react'

const Button = ({children,onClick}) => {
    return (
        <button className="bg-[#1f1f1f] hover:bg-[#f31c0d] transition duration-200 text-white font-bold py-2 px-4 rounded-full mx-1" onClick={onClick}>
            {children}
        </button>
    )
}

export default Button