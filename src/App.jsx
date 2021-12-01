//vendor
import React, { useReducer } from 'react'
//config context y reducer
import { UserContext } from './createContex/createContex'
import { userReduce } from './Reducer/UserReduce';
//Router
import {AppRouter} from './router/AppRouter'
//firebase

const initialState = [
    { 

        id: 1,
        valgo: "mucho",
    }
];

export const App = () => {
    const [ state, dispatch ] = useReducer(userReduce, initialState )

    return (
        <div className="app__main">
            <UserContext.Provider value={{state, dispatch}}>
            <AppRouter/>
            </UserContext.Provider>
        </div>
    )
}
