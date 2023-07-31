import * as React from "react";
import { Modal } from "next-modal";
import Offers from "../../components/Offers";

 function ChangePlanModal({
  toggleModal,
  setToggleModal,
}) {
  return (
    <div className="bg-gray-0 plan-modal">
    {/* Modal */}
    <Modal toggle={toggleModal} setToggle={setToggleModal} className="plan-modal">
        <Offers />
    </Modal>
  </div>
  );
}


export default ChangePlanModal;