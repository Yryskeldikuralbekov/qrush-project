import ReactDOM from 'react-dom';
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
        className={`${openNewsModal ? 'absolute h-[700px] rounded-[30px] left-[50%] translate-x-[-50%] z-10 w-[70%] flex justify-between bg-gradient-to-t from-[#160503] from-0% via-black to-[#160503] text-center opacity-1' : 'hidden opacity-0'}`}
      >
        <div className='w-[40%]'>
          <img
            className='w-[100%] h-[90%] mx-[50px] my-[30px] rounded-[30px] object-cover'
            src={img}
            alt='imgNew'
          />
        </div>
        <div className='w-[55%] text-[#FFF] mx-auto'>
          <p className='text-center text-[18px] font-[500] pt-[110px] w-[618px] mx-auto xl:text-[30px] xl:w-[918px] xl:pt-[98px] lg:text-[23px] pb-[20px]'>
            {title}
          </p>
          <p className='pl-[80px] text-[24px]'>{description}</p>
          <p className='pl-[80px] text-[24px]'>{warning}</p>
          <p className='absolute bottom-[20px] text-[24px] right-[40px]'>
            {date}
          </p>
        </div>
      </div>
    </section>,
    portal
  );
