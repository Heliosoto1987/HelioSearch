//vendor
import React from 'react'
//components
import { NavBar } from '../components/navBars/NavBar'

export const LandingPage = (history) => {
    return (
        <div className="Landing">
            <NavBar history={history}/>
        </div>
    )
}
