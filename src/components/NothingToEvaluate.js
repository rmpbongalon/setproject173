import React from "react";
import '../css/NothingToEvaluate.css';

function NothingToEvaluate() {
    return(
        <div className="prompt">
            <div className="checklens">
                <img
                    alt=""
                    className="check"
                    src="https://static.overlay-tech.com/assets/012fa8c7-97da-43e6-a5f9-7e3ea4e82178.svg"
                />
                <img
                    alt=""
                    className="lens"
                    src="https://static.overlay-tech.com/assets/832daada-2847-4e77-a380-6bbf633a65c1.svg"
                />
            </div>
            
            <p className="text">
                You’re all caught up! Nothing to evaluate right now
            </p>
        </div>
    );
}

export default NothingToEvaluate;