import React from "react";

function Modal() {
  return (
    <div className="modal">
        <div className="modal-overlay">
            <div className="modal-window">
                <div className="modal-header">
                    <span className="modat-title">Modal-title</span>
                    <span className="modal-close">&times;</span>
                </div>
                <div className="modal-body"></div>
                <div className="modal-footer"></div>
            </div>
        </div>
    </div>
  );
}

export default Modal;