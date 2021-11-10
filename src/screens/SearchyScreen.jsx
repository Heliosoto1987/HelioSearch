//vendor
import React, { useState } from 'react'
//components
import { Cards } from '../components/Cards'

//companies
import companies from '../companeis/companies.json'
import { NavBarFilter } from '../components/navBars/NavBarFilter'
import { FilterModal } from '../components/modal/FilterModal'

export const SearchyScreen = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="searchyscreen">
            <NavBarFilter
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            />
            <div className="searchyscreen__main">
                {
                    companies.map(value => (
                        <Cards 
                        key={value.id}
                        name={value.name}
                        founded={value.founded}
                        industry={value.industry}
                        website={value.website}
                        size={value.size}
                        />
                    ))
                }
            </div>
            <FilterModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            />
        </div>
    )
}
