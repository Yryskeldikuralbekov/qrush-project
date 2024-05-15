import ReactDOM from 'react-dom';
import './Modal.css';
const portal = document.getElementById('portal');

export const ModalNewsWindow = ({
  openNewsModal,
  setOpenNewsModal,
  img,
  title,
  description,
  warning,
  date,
}) =>
  ReactDOM.createPortal(
    <section
      onClick={() => setOpenNewsModal(false)}
      className={`${openNewsModal ? 'bg-[#0000005b] w-full mx-auto h-[100vh] fixed top-[0] left-[0] flex items-center opacity-1' : ' opacity-0'} ease-out duration-[0.5s]`}
    >
      <div
        onClick={event => event.stopPropagation()}
        className={`${openNewsModal ? 'scaleEnter absolute tablet:h-[50vh] lg:h-[60vh] rounded-[30px] top-[15%] sm:top-[10%] md:top-[15%] tablet:top-[25%] lg:top-[20%] left-[5%] lg:left-[10%] z-10 lg:w-[80%] w-[90%] tablet:flex tablet:justify-between tablet:items-center bg-gradient-to-t from-[#160503] from-0% via-black to-[#160503] text-center opacity-1 transform transition-all duration-500' : 'transform hidden opacity-0'}`}
      >
        <div className='w-[70%] md:w-[100%] tablet:w-[60%] lg:w-[30%] mx-auto'>
          <img
            className='w-[80%] mx-auto md:w-[40%] my-[40px] tablet:mt-0 tablet:pl-[20px] tablet:w-[100%] md:mx-auto h-[90%] rounded-[30px] object-cover'
            src={img}
            alt='News'
          />
        </div>
        <div className='w-full lg:w-[55%] text-[#FFF] mx-auto'>
          <p className='text-left w-full md:w-[80%] px-[20px] text-[14px] md:text-[20px] tablet:text-[22px] pb-[20px]'>
            {title}
          </p>
          <p className='w-full md:w-[100%] text-[10px] md:text-[20px] tablet:text-[18px] px-[20px] text-left pb-[20px]'>
            {description}
          </p>
          <p className='px-[20px] text-[12px] tablet:text-[18px] text-left text-[#FE2A2C] mb-[70px]'>
            {warning}
          </p>
          <p className='absolute bottom-[20px] text-[14px] right-[40px]'>
            {date}
          </p>
        </div>
      </div>
    </section>,
    portal
  );
