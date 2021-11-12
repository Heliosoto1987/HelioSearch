//vendor
import React, { useReducer, useState } from 'react'
//components
import { Cards } from '../components/Cards'
import { NavBarFilter } from '../components/navBars/NavBarFilter'
import { FilterModal } from '../components/modal/FilterModal'
//Reducer
import { companiesReducer } from '../reducers/companiesReducer'
//companies
import companies from '../companeis/companies.json'

const initialState = companies

export const SearchyScreen = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [state, dispatch] = useReducer(companiesReducer, initialState)
    return (
        <>
        <div className="searchyscreen">
            <NavBarFilter
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            />
            <div className="searchyscreen__main">
                {
                    state.map(value => (
                        <Cards      
                        key={value?.id}
                        name={value?.name}
                        founded={value?.founded}
                        industry={value?.industry}
                        website={value?.website}
                        size={value?.size}
                        />
                    ))
                }
            </div>

            <FilterModal
            dispatch={dispatch}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            />
        </div>
        </>
    )
}
