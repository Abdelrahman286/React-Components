import React, { useState } from "react";
import Modal from "../components/Modal";
const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <button
        onClick={handleClose}
        className="px-4 py-2 bg-blue-500 rounded mt-2"
      >
        Accept
      </button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );
  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="bg-green-200 m-4 px-4 py-2 hover:bg-green-100 rounded"
      >
        Open Modal
      </button>

      {showModal && modal}

      <p className="text-5xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ipsa
        quia quidem possimus, officiis corporis repellat labore non quam
        corrupti nesciunt eum ab modi animi eveniet ut veritatis? Ut,
        exercitationem!
      </p>

      <p className="text-5xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ipsa
        quia quidem possimus, officiis corporis repellat labore non quam
        corrupti nesciunt eum ab modi animi eveniet ut veritatis? Ut,
        exercitationem!
      </p>

      <p className="text-5xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ipsa
        quia quidem possimus, officiis corporis repellat labore non quam
        corrupti nesciunt eum ab modi animi eveniet ut veritatis? Ut,
        exercitationem!
      </p>

      <p className="text-5xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ipsa
        quia quidem possimus, officiis corporis repellat labore non quam
        corrupti nesciunt eum ab modi animi eveniet ut veritatis? Ut,
        exercitationem!
      </p>

      <p className="text-5xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ipsa
        quia quidem possimus, officiis corporis repellat labore non quam
        corrupti nesciunt eum ab modi animi eveniet ut veritatis? Ut,
        exercitationem!
      </p>

      <p className="text-5xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ipsa
        quia quidem possimus, officiis corporis repellat labore non quam
        corrupti nesciunt eum ab modi animi eveniet ut veritatis? Ut,
        exercitationem!
      </p>
      <p className="text-5xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ipsa
        quia quidem possimus, officiis corporis repellat labore non quam
        corrupti nesciunt eum ab modi animi eveniet ut veritatis? Ut,
        exercitationem!
      </p>
    </div>
  );
};

export default ModalPage;
