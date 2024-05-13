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
    handleCloseModal();
  };

  return ReactDOM.createPortal(
    <>
      {showModal && (
        <div
          className='max-w-full fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
          onClick={closeModal}
        >
          <div className='w-[80dvw] h-[20dvh] sm:h-[30dvh] md:h-[40dvh] tablet:h-[50dvh] lg:h-[80dvh] scaleEnter'>
            <img
              src={imageUrl}
              alt='Modal'
              className='w-full h-full object-cover rounded-[55px]'
            />
          </div>
        </div>
      )}
    </>,
    portal
  );
};
