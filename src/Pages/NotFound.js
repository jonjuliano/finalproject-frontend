import Modal from "../Components/NavBarModal";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import "../index.css"

function NavBar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
      <div >
        <button 
          type="button"
          className="modal-button"
          onClick={() => {
            setIsModalOpen(!isModalOpen);
          }}
        >
          <span>&#8811;</span>
        </button>
  
        {isModalOpen && (
          <Modal title="Navigation" onClose={() => {
            setIsModalOpen(false)
          }}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/drinks">Drinks</Link></li>
              <li><Link to="/admin">Admin</Link></li>
            </ul>
          </Modal>
        )}
      </div>
    );
  }

  export default function Root() {
    return (
        <div className="container">
            <NavBar />
            <h1>404 Error! Nothing to see here!</h1>
            <p>Looks like you might need a drink:</p>
            <Link to='/'>Return Home</Link>
        </div>
    )
  }