import { useRef, useEffect } from "react";
import gsap from "gsap";

const ConfirmModal = ({
  darkMode,
  isOpen,
  id,
  initialData,
  setCardToDelete,
  setInitialData,
  setData,
  data,
  setModalOpen,
}) => {
  if (!isOpen) return null;
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "bounce.out",
        }
      );
    }
  }, [isOpen]);

  const onConfirm = () => {
    const updatedData = initialData.filter((item) => item.name !== id);
    setInitialData(updatedData);
    setData(updatedData);
    setModalOpen(false);
    if (data.length === 0) {
      console.log("shit");
    }
  };

  const onCancel = () => {
    setModalOpen(false);
    setCardToDelete(null);
  };

  return (
    <div
      ref={modalRef}
      className={`${
        darkMode ? "text-white" : "text-Red-400"
      } fixed top-0 left-0 w-full h-full flex items-center backdrop-blur justify-center z-50 modal`}
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

export default ConfirmModal;
