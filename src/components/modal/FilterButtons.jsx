import React from 'react'

export const FilterButtons = ({companiesFilters, setFilterValue}) => {
    const handleButtonFilter = (e) => {
        e.preventDefault()
        setFilterValue(e.target.value)
    }
    const handleResetFilter = (e) => {
        e.preventDefault()
        setFilterValue('')
    }

    return (
        <>
            <button className="filterbutton__reset" onClick={handleResetFilter}>Borrar Filtro</button>
        {
            companiesFilters.map((value, i) => (
                <button 
                onClick={handleButtonFilter}
                value={value}
                className="filterbutton" 
                key={i}
                >{value}</button>
            ))
        }
   
        </>
    )}
