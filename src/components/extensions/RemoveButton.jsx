import { useState } from "react";
// confirm modal component
const ConfirmModal = ({ darkMode, isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div
      className={`${
        darkMode ? "text-white" : "text-Red-400"
      } fixed top-0 left-0 w-full h-full flex items-center backdrop-blur justify-center z-50`}
    >
      <div
        className={`${
          darkMode
            ? "bg-Neutral-800 shadow-Neutral-800"
            : "bg-white text-Neutral-800 shadow-Neutral-200"
        } border-Neutral-100 border-1 p-6 rounded-2xl m-5 shadow-xl`}
      >
        <h3 className="text-Red-700 mb-3">⚠️ Confirm Deletion</h3>
        <p className="mb-3">
          This action will permanently delete the card. Are you sure?
        </p>
        <button
          onClick={onConfirm}
          className="cursor-pointer mr-6 text-white bg-Red-700 px-4 py-2 rounded-lg transitio-colors ease-in duration-200 hover:bg-Red-500 "
        >
          Yes, delete
        </button>
        <button
          onClick={onCancel}
          className="cancel-btn cursor-pointer border-1 transition-colors ease-in duration-200 border-transparent px-4 py-2 rounded-lg hover:border-Red-700 "
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

const RemoveButton = ({
  darkMode,
  id,
  initialData,
  setInitialData,
  setData,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  // Removing cards and updating the data
  const handleClick = () => {
    setModalOpen(true);
  };

  const onConfirm = () => {
    const updatedData = initialData.filter((item) => item.name !== id);
    setInitialData(updatedData);
    setData(updatedData);
    setModalOpen(false);
  };

  const onCancel = () => {
    setModalOpen(false);
    setCardToDelete(null);
  };

  return (
    <>
      <button
        className={`${
          darkMode
            ? "text-Neutral-100 border-Neutral-600 drop-shadow"
            : "border-Neutral-300"
        } border cursor-pointer text-lg rounded-full py-2 px-5 font-medium`}
        onClick={handleClick}
      >
        Remove
      </button>

      <ConfirmModal
        isOpen={modalOpen}
        onConfirm={onConfirm}
        onCancel={onCancel}
        darkMode={darkMode}
      />
    </>
  );
};

export default RemoveButton;
