import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {
    const [ formValues, handleInputChange ] = useForm({
        email: '',
        password: '',
    });


    const handleLogin = () => {
    }

    const handleGoogleLogin = () => {

    }

    const { email, password } = formValues;
   
    return (
        <div className="loginscreen">
            <div className="loginscreen__img">
                <img src="/HelioSearch/assets/logo.png" alt="Img Logo"></img>
            </div>
            <h2 className="loginscreen__title">Welcome</h2>
            <h2 className="loginscreen__title">Login with your email and password, or with your google account</h2>
            <form onSubmit={ handleLogin }>
                <label>Email</label>
                <input
                    type="text"
                    placeholder="email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
                <label>Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    autoComplete="off"
                    value={ password }
                    onChange={ handleInputChange }
                />

                {
                <button
                className="btn loginscreen__btn"
                type="submit"
                // disabled={ loading }
                
                >
                    Login
                </button>
                }
                
                <div className="auth__social-networks">
                    <p>Login with social networks</p>
                        <div className="google-btn"
                        onClick={handleGoogleLogin}
                        >
                            <div className="google-icon-wrapper">
                                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                            </div>
                            <p className="btn-text">
                                <b>Sign in with google</b>
                            </p>
                        </div>
                <Link 
                    to="/createuser-"
                    className="loginscreen__link"
                >
                    Create new Account
                </Link>
                </div>
               
            </form>
    </div>
    )
}
