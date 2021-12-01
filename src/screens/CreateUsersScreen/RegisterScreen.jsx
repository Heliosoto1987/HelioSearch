//vendor
import React, { useContext } from 'react'
//router
import { Link } from 'react-router-dom'
//actions
import { startRegisterWithEmailPassword } from '../../actions/auth'
//context
import { UserContext } from '../../createContex/createContex'
//hooks
import { useForm } from '../../hooks/useForm'
//types
import { types } from '../../types/types'


export const RegisterScreen = () => {
    const { dispatch } = useContext(UserContext)
    const [formValues, handleInputChange] = useForm({
        name: 'Tu nombre',
        email: 'exampleemail@gmail.com',
        password: '',
        password2: ''
    })
    const handleInputSubmitRegister = async (e) => {
        e.preventDefault()
        try {
            startRegisterWithEmailPassword(email, password, name)
            const action = {
                types: types.register,
                payload: {
                    email,
                    password,
                    name,
                }
            }
            dispatch(action)

        } catch (error) {
            console.log(error)
        }

    }

    const { name, email, password, password2 } = formValues

    return (
        <>
            <div className="createusuario">
                <div
                    className="createusuario__box"
                >
                    Register

                    <form
                        className="createusuario__form"
                        onSubmit={handleInputSubmitRegister}
                    >

                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={name}
                            className="auth__input"
                            autoComplete="off"
                            onChange={handleInputChange}
                        />

                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={email}
                            className="auth__input"
                            autoComplete="off"
                            onChange={handleInputChange}
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            className="auth__input"
                            onChange={handleInputChange}
                        />

                        <input
                            type="password"
                            placeholder="Confirm password"
                            name="password2"
                            value={password2}
                            className="auth__input"
                            onChange={handleInputChange}
                        />


                        <button
                            type="submit"
                        >
                            Register
                        </button>



                        <Link
                            to="/login"
                            className="link"
                        >
                            Already registered?
                        </Link>

                    </form>
                </div>
            </div>
        </>
    )
}
