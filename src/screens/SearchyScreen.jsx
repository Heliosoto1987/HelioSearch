//vendor
import React, { useState } from 'react'
//components
import { Cards } from '../components/Cards'
import { NavBarFilter } from '../components/navBars/NavBarFilter'
import { FilterModal } from '../components/modal/FilterModal'
//companies
import companiesJson from '../companeis/companies.json'

const initialState = companiesJson

export const SearchyScreen = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [companies] = useState(initialState)
    const [filterValue, setFilterValue] = useState('')
    const filteredCompanies = companies.reduce((acc, next) => {
        const { industry } = next;
        if (!!industry && !acc.includes(industry)) {
          acc.push(industry);
        };
        return acc;
      }, []);
    const [companiesFilters, setCompaniesFilters] = useState(filteredCompanies)
    const createCards = companies.filter(({ industry }) => !!industry && industry.includes(filterValue))
    return (
        <div className="searchyscreen">
            <NavBarFilter
                setIsOpen={setIsOpen}
                isOpen={isOpen}
            />
                <div className="searchyscreen__main">
                    {
                        createCards.map(value => (
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
                setFilterValue={setFilterValue}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                filterValue={filterValue}
                companiesFilters={companiesFilters}
                setCompaniesFilters={setCompaniesFilters}
            />
        </div>
    
    )
}
