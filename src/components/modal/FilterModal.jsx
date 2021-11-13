//vendor
import React from 'react'
//library modal
import Modal from 'react-modal';
//components
import { FilterButtons } from './FilterButtons';
//modal config
Modal.setAppElement('#root');


export const FilterModal = ({isOpen, setIsOpen, companiesFilters, setFilterValue}) => {
    const closeModal = () =>{
        setIsOpen(false)
    }
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            className="modal"
            overlayClassName="modal__fondo"
            closeTimeoutMS={200}
        >
            <h1 className="modaltitle"> Filter Companies </h1>
            <hr />
                <form >
                  
                    <FilterButtons
                    setFilterValue={setFilterValue}
                    companiesFilters={companiesFilters}
                    />
                </form>

               
            </Modal>
    )
}
