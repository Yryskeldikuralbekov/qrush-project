import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const portal = document.getElementById('portal');

export const ImageModal = ({ imageUrl, handleCloseModal }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => handleCloseModal(), 300);
  };

  const stopPropagation = e => {
    e.stopPropagation();
  };

  return ReactDOM.createPortal(
    <>
      {showModal && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
          onClick={closeModal}
        >
          <div
            className='h-[25dvh] lg:h-[80dvh] scaleEnter'
            onClick={stopPropagation}
          >
            <img
              src={imageUrl}
              alt='Modal'
              className='w-full h-full object-contain rounded-[55px]'
            />
          </div>
        </div>
      )}
    </>,
    portal
  );
};
