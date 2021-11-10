import React from 'react'
import Modal from 'react-modal';



  Modal.setAppElement('#root');

export const FilterModal = ({isOpen, setIsOpen}) => {
    const closeModal = () =>{
        setIsOpen(false)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(e)
    }
    return (
       <>
       <Modal
        isOpen={isOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal__fondo"
        closeTimeoutMS={200}
      >
       <h1> Filter Companies </h1>
    <hr />
    <form onSubmit={handleSubmit} className="container">
       <select> Hola
           <option value="1">1</option>
           <option value="1">2</option>
           <option value="1">3</option>
           <option value="1">4</option>
       </select>

        <button
            type="submit"
        >
         Guardar
        </button>

    </form>
      </Modal>
       </>
    )
}
