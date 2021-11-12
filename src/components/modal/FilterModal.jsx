//vendor
import React, { useEffect } from 'react'
//library modal
import Modal from 'react-modal';
//custom hooks
import { useForm } from '../../customHooks/useForm';
//modal config
Modal.setAppElement('#root');


export const FilterModal = ({isOpen, setIsOpen, dispatch}) => {
    const closeModal = () =>{
        setIsOpen(false)
    }
    const [formValues, handLeInputChange] = useForm({
        name: '',
        industry: '',
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        const action = {
            type: 'filter',
            payload: {
            name,
            industry,
            }
        }
        dispatch(action)
    }
    const {name, industry} = formValues

    useEffect(() => {
        const action = {
            type: 'renewState'
        }
        if(industry === '' || name === ''){
            dispatch(action)

        }
    }, [industry, dispatch, name])
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            className="modal"
            overlayClassName="modal__fondo"
            closeTimeoutMS={200}
        >
            <h1> Filter Companies </h1>
            <hr />
                <form 
                onSubmit={handleSubmit}
                className="container">
                    <input 
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={handLeInputChange}
                    />
                    <input 
                    placeholder="Industry"
                    name="industry"
                    value={industry}
                    onChange={handLeInputChange}
                    />
                    <button
                        type="submit"
                    >
                        Save
                    </button>
                </form>
            </Modal>
    )
}
