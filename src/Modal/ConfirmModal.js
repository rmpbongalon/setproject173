import React from 'react' 
import './ConfirmModalStyle.css'


const ConfirmModal = (props) => {

    if(!props.show) {
        return null
    }

    return (
        <div className="modal-container">
            <div className="modal-content">
                <h3> Are you sure you want to submit? </h3>
            </div> 
            <div className="choices-content">
                <button> Confirm </button>
                <button onClick={props.onClose}> Cancel </button>
            </div>
        </div>
    )
}

export default ConfirmModal