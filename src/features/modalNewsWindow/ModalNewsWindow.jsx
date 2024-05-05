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
        className={`${openNewsModal ? 'scaleEnter absolute lg:h-[70vh] rounded-[30px] left-[50%] translate-x-[-50%] z-10 lg:w-[80%] w-[90%] lg:flex lg:justify-between bg-gradient-to-t from-[#160503] from-0% via-black to-[#160503] text-center opacity-1 transform transition-all duration-500 scale-100' : 'transform hidden opacity-0 scale-150'}`}
      >
        <div className='w-[70%] lg:w-[40%] mx-auto'>
          <img
            className='w-[100%] h-[90%] pt-[20px] lg:mx-[50px] lg:my-[15px] rounded-[30px] object-cover'
            src={img}
            alt='News'
          />
        </div>
        <div className='w-full lg:w-[55%] text-[#FFF] mx-auto mt-[50px] tablet:pl-[80px]'>
          <p className='text-left w-full md:w-[80%] px-[20px] text-[14px] md:text-[20px] tablet:text-[22px] pb-[20px]'>
            {title}
          </p>
          <p className='w-full md:w-[80%] text-[14px] md:text-[16px] tablet:text-[18px] px-[20px] text-left pb-[80px]'>
            {description}
          </p>
          <p className='pl-[80px] text-[24px] text-center'>{warning}</p>
          <p className='absolute bottom-[20px] text-[24px] right-[40px]'>
            {date}
          </p>
        </div>
      </div>
    </section>,
    portal
  );
