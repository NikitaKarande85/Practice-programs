import React from "react";
import './Custom_Modal_Style.css';

function Modal({closeModal,offer}) {

    const closeModalPopup=(e)=>{
        console.log("e.target.className",e.target.className);
        if(e.target.className=="Modal"){
            closeModal();
        }
    }
    return (
        <div className="Modal" onClick={(e)=>closeModalPopup(e)}>
            <div className="Modal-content">
                <button className="cross" onClick={closeModal}>❌</button>
                <div className="content">Congratulation your poup is opened</div>
                <button className="offer-Accept-btn" onClick={offer}>Accept offer</button>
            </div>
        </div>
    )
}
export default Modal;