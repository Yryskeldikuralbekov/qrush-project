import ReactDOM from 'react-dom';
const portal = document.getElementById('portal');

export const ModalWindow = ({ text, openModal, setOpenModal }) =>
  ReactDOM.createPortal(
    <section
      onClick={() => setOpenModal(false)}
      className={`${openModal ? 'bg-[#0000005b] w-full h-[100vh] fixed top-[0] left-[0] flex items-center opacity-1' : ' opacity-0'} ease-out duration-[0.5s]`}
    >
      <div
        onClick={event => event.stopPropagation()}
        className={`${openModal ? 'scaleEnter absolute h-[20dvh] tablet:h-[300px] z-10 w-[100dvw] bg-gradient-to-t from-[#160503] from-0% via-black to-[#160503] text-center opacity-1' : 'hidden opacity-0'}`}
      >
        <p className='text-center text-[#FFF] px-4 text-[14px] sm:text-[15px] tablet:text-[18px] font-[500] pt-[60px] tablet:pt-[110px] max-w-[400px] tablet:max-w-[618px] mx-auto xl:text-[30px] xl:max-w-[918px] xl:pt-[98px] lg:text-[23px] '>
          {text}
        </p>
      </div>
    </section>,
    portal
  );
