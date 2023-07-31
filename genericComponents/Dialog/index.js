import * as React from "react";
import { Modal } from "next-modal";

export function AlertDialog({
  toggleModal,
  setToggleModal,
  title,
  description,
  actions,
}) {
  return (
    <div className="min-h-100vh bg-gray-9">
      {/* Modal */}
      <Modal toggle={toggleModal} setToggle={setToggleModal}>
        <Modal.Header className="sans font-900 text-30px fade-in-left animation-duration-500ms animation-forwards">
          <h3 className="tabheader-title">{title}</h3>
        </Modal.Header>
        <hr />
        <Modal.Body className="sans font-400 text-15px text-gray fade-in animation-duration-800ms animation-forwards">
          <p className="profiletab_content-p">{description}</p>
        </Modal.Body>
        <Modal.Footer className="sans font-400 text-10px">
          <div className="d-flex justify-content-center gap-4">
            {actions.map((btn) => {
              return (
                <>
                  <button className={btn?.title === "No" ? "transparent-btn transparent-btn--red" : "transparent-btn"} onClick={btn?.onClick}>{btn?.title}</button>
                </>
              );
            })}
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
