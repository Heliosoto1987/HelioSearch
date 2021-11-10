import React from 'react'

export const NavBarFilter = ({isOpen, setIsOpen}) => {
    const handleInputFiler = () => {
        setIsOpen(!isOpen)
    }
    return (
        <nav className="navFilter">
            <button 
            className="navFilter__primarybtn"
            onClick={handleInputFiler}
            >
                Filter
            </button>
        </nav>
    )
}
