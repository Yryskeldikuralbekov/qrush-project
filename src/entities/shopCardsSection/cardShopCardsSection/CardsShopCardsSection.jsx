import { Button, useMediaQuery } from '../../../shared';
export const CardsShopCardsSection = ({ card }) => {
  const isMobile = useMediaQuery('(min-width: 450px) and (max-width: 575px)');
  return (
    <div
      className={`tablet:mt-[100px] flex justify-center tablet:flex-none tablet:justify-between mx-auto h-[662px] sm:h-[1086px] md:h-[1438px] tablet:h-[460px] lg:h-[660px] xl:h-[860px] relative ${isMobile ? 'max-w-[90%] h-[858px] mx-auto' : ''}`}
      key={card.id}
    >
      <div
        className={`max-w-[90%] tablet:px-0 tablet:max-w-[87.24%] lg:max-w-[87.24%] mx-auto xl:max-w-[87.24%] flex flex-col tablet:flex-row tablet:justify-between items-center tablet:gap-x-[65px] tablet:absolute tablet:items-center ${isMobile ? 'max-w-[90%] h-[858px]' : ''} ${card.id % 2 === 0 ? 'tablet:max-w-[89.3%] tablet:flex-row-reverse tablet:right-0 lg:max-w-[89.3%] lg:flex-row-reverse lg:right-0' : ''} `}
      >
        <div>
          <img
            className={`w-[340px] h-[343px] mx-auto border-[0.50px] border-[solid] border-[#e2ded3] rounded-[16px] sm:w-[518px] sm:h-[504px] md:w-[691px] md:h-[681px] tablet:w-[500px] tablet:h-[460px] lg:w-[680px] lg:h-[660px] xl:w-[805px] xl:h-[860px] ${isMobile ? 'w-[405px] h-[395px]' : ''}`}
            src={card.image}
            alt='cardImg'
          />
        </div>
        <div
          className={`w-[340px] h-[343px] flex justify-center flex-col items-center rounded-[16px] px-[8px] sm:w-[518px] sm:h-[524px] md:w-[691px] md:h-[700px] tablet:px-0 tablet:border-0  tablet:w-[405px] tablet:h-[348px] xl:w-[705px] xl:h-[548px] lg:w-[550px] lg:h-[448px] ${isMobile ? 'w-[405px] h-[410px]' : ''}`}
        >
          <div
            className={`w-[278px] h-[258px] sm:w-[424px] sm:h-[400px] md:w-[560px] md:h-[525px] mx-auto tablet:w-[405px] tablet:h-[705px] lg:w-[550px] xl:w-[705px] ${isMobile ? 'w-[334px] h-[339px]' : ''}`}
          >
            <h2
              className={`w-[220px] sm:w-[350px] md:w-[440px] tablet:w-[405px] lg:w-[505px] xl:w-[645px] font-bold text-[#E2DED3] text-[14px] sm:text-[22px] md:text-[27px] tablet:text-[30px] lg:text-[40px] xl:text-[50px] ${isMobile ? 'text-[18px] w-[295px]' : ''}`}
            >
              {card.title}
            </h2>
            <ul
              className={`text-[12px] sm:text-[18px] md:text-[23px] list-disc font-medium mt-[8px] md:mt-[15px] tablet:text-[22px] lg:text-[27px] xl:text-[30px] tablet:mt-[10px] ml-[24px] md:ml-[30px] tablet:ml-[36px] ${isMobile ? 'text-[16px]' : ''}`}
            >
              {card.product_description.map(description => (
                <li key={description.id}>
                  <p>{description.description}</p>
                </li>
              ))}
            </ul>
            <div
              className={`w-[278px] mx-auto font-montserrat sm:w-[424px] md:w-[344px] md:h-[45px] tablet:w-[434px] lg:w-[490px] xl:w-[634px] flex justify-between flex-col tablet:flex-row items-center tablet:mt-[10px] lg:mt-[30px] xl:mt-[87px] gap-x-[3px] mt-[15px] ${isMobile ? 'w-[334px]' : ''}`}
            >
              <p
                className={`font-semibold text-[#d9d9d9] opacity-70 text-[14px] sm:text-[16px] md:text-[27px] md:font-semibold mt-[8px] md:mt-[15px] tablet:text-[25px] lg:text-[27px] xl:text-[30px] tablet:mt-[40px] ${isMobile ? 'text-[14px]' : ''}`}
              >
                Цена: {card.price} сом
              </p>
              <div className='mt-[16px] md:mt-[31px] text-center'>
                <a
                  href='https://api.whatsapp.com/send/?phone=996700763736&text&type=phone_number&app_absent=0'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Button variant='buyButton'>Купить</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
