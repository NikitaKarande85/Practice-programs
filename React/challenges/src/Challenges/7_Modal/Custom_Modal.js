import React, { useState } from "react";
import './Custom_Modal_Style.css';
import Modal from "./Modal";

function Custom_Modal() {
    const [isShow, setIsShow] = useState(false);
    const [offerAccepted, setOfferAccepted] = useState(false);

    const closeModal = () => {
        setIsShow(false)
    }

    const offer = () => {
        setOfferAccepted(true);
        setIsShow(false)
    }
    return (
        <>
            <div>
                <div className="show-offer">
                    {
                        offerAccepted ?<h1>Offer Accepted</h1>: <button onClick={() => setIsShow(true)} className="offer-btn">show offer</button>
                    } 
                </div>

                {
                    isShow && <Modal closeModal={closeModal} offer={offer} />
                }
            </div>
        </>
    )
}
export default Custom_Modal