import React from 'react'
import {Link} from 'react-router-dom'
import './ConfirmModalStyle.css'

export default function GoHomeModal(props){
    if(!props.show) {
        return null
    }

    return (
        <div className="modal-container">
            <div className="modal-content">
                <h3> Are you sure you want to go back to home? </h3>
                <h6> Your progress will not be saved </h6>
            </div> 
            <div className="choices-content">
                <Link to="/home">
                    <button className="modalBtn"> Confirm </button>
                </Link>&nbsp;&nbsp;
                <button className="modalBtn"  onClick={props.onClose}> Cancel </button>
            </div>
        </div>
    )
}