import { useRef } from 'react';
import './popup.scss'
import {createPortal} from 'react-dom';

export default function Popup() {
    const popupRef = useRef();

    function openPopup() {
        popupRef.current.showModal();
    }
    const Portal = function() {
        return createPortal(<dialog 
            ref={popupRef} 
            open={false} 
            className='popup'>
                <div className="container">some text</div>
                <button type='button' onClick={() => popupRef.current.close()}>close</button>
        </dialog>, document.getElementById('modal')) 
    }

    return(
        <>
        <Portal />
        <button type='button' onClick={() => openPopup()}>open</button>
        </>
    ) 
}
