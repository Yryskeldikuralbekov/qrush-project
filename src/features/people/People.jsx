import { Link } from 'react-router-dom';
import { OrangeButton } from '../../shared';
import arrayButton from '../../shared/img/link.svg';

export const People = props => {
  const {
    br1,
    br2,
    br3,
    h2,
    p1,
    p2,
    p3,
    to,
    thirdHuman,
    firstHuman,
    secondHuman,
    bg,
  } = props;

  const humansArr = [
    { newLine: br1, description: p1, img: firstHuman },
    { newLine: br2, description: p2, img: secondHuman },
    { newLine: br3, description: p3, img: thirdHuman },
  ];

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section
      className='h-[700px] xl:h-[1174px] lg:h-[900px] bg-cover bg-no-repeat bg-center'
      style={{ backgroundImage: `url(${bg})` }}
    >
      <section className='mx-auto max-w-[90%] xl:container'>
        <h2 className='text-[#F5F5F5] font-[Montserrat] text-[80px] lg:text-[100px] not-italic font-medium pt-[60px] xl:pt-[100px] leading-[normal]'>
          {h2}
        </h2>
        <div className='flex justify-end'>
          <Link
            className='flex justify-normal items-center'
            to={to}
            onClick={scrollToTop}
          >
            <button className='font-[Montserrat] text-[30px] not-italic text-#F5F5F5 font-medium leading-[normal] transition-colors duration-300 hover:text-[#F93822]'>
              смотреть все
            </button>{' '}
            <img src={arrayButton} className='ml-[10px]' alt='' />
          </Link>
        </div>
        <ul className='flex gap-x-[20px] mt-[63px] mb-[90px]'>
          {humansArr.map((human, index) => (
            <li
              key={index}
              className='border-[1px] border-[solid] rounded-[30px] border-[1px] border-[solid] border-[#F5F5F5] bg-[rgba(0,_0,_0,_0.70)] [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] w-full h-full'
            >
              <div className='p-[20px] flex justify-center items-center flex-col'>
                <img
                  src={human.img}
                  alt={`employer${index + 1}`}
                  className={'h-[263px] xl:h-[563px] lg:h-[370px]'}
                />
                <p className='font-bold text-[24px] lg:text-[30px] mb-[5px] text-center mt-[20px] text-[#fff]'>
                  {human.description}
                  {human.newLine && <br />}{' '}
                  {human.newLine ? `${human.newLine}` : null}
                </p>
                {!human.newLine && (
                  <OrangeButton key={`button${index}`} txt={'Подробнее'} />
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};
