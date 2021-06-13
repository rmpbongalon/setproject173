import React from 'react'
import './ConfirmModalStyle.css'

export default function MissingModal(props){

    if(!props.show) {
        return null
    }
    return (
        <div className="modal-container">
            <div className="modal-content-missing">
                <h3> Some questions are not yet answered </h3>
            </div> 
            <div className="choices-content">
                <button onClick={props.onClose}> Ok </button>
            </div>
        </div>
    )
}