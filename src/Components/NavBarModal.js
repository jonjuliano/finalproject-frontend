import { createPortal } from "react-dom";
import { useEffect } from "react";
import "../index.css";

const modalRoot = document.getElementById("modal-container")

export default function Modal(props) {

    
    const modalElement = document.createElement('div')
    
    useEffect(() => {
        modalRoot.appendChild(modalElement);
        return() => {
            modalRoot.removeChild(modalElement)
        }
    }, [modalElement])

    
    return createPortal(
        <div className="custom-modal"><button type="button"
            className="close-modal"
            onClick={()=> {
                props.onClose();
            }}>
                <span>&#8810;</span>
            </button>
            <div className="modal-body" ><h3>{props.title}</h3>
            <div>{props.children}</div>
            </div>
        </div>,
        modalRoot
    );
}