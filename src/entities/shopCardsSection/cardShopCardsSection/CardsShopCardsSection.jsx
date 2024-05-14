import { useTranslation } from 'react-i18next';
import { Button } from '../../../shared';
export const CardsShopCardsSection = ({ card }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`mt-[90px] md:mt-[175px] tablet:mt-[100px] flex justify-center tablet:flex-none tablet:justify-between mx-auto h-[670px] sm:h-[842px] md:h-[1313px] tablet:h-[360px] lg:h-[460px] xl:h-[860px] relative`}
      key={card.id}
    >
      <div
        className={`max-w-[90%] tablet:px-0 tablet:max-w-[87.24%] lg:max-w-[87.24%] mx-auto xl:max-w-[87.24%] flex flex-col tablet:flex-row tablet:justify-between items-center tablet:gap-x-[95px] tablet:absolute tablet:items-center ${card.id % 2 === 0 ? 'tablet:max-w-[89.3%] tablet:flex-row-reverse tablet:right-0 lg:max-w-[89.3%] lg:flex-row-reverse lg:right-0' : ''} `}
      >
        <div>
          <img
            className={`w-[343px] h-[340px] mx-auto border-[0.50px] border-[solid] border-[#e2ded3] rounded-[16px] sm:w-[440px] sm:h-[440px] md:w-[664px] md:h-[658px] tablet:w-[405px] tablet:h-[360px] lg:w-[505px] lg:h-[460px] xl:w-[805px] xl:h-[860px] `}
            src={card.image}
            alt='cardImg'
          />
        </div>
        <div
          className={`w-[343px] flex justify-center mt-[38px] md:mt-[78px] tablet:mt-0 rounded-[16px] px-[8px] sm:w-[440px] sm:h-[364px] md:w-[558px] md:h-[577px] tablet:px-0 tablet:border-0  tablet:w-[405px] tablet:h-[348px] xl:w-[705px] xl:h-[548px] lg:w-[550px] lg:h-[448px]`}
        >
          <div
            className={`w-[278px] sm:w-[378px] sm:h-[300px] md:w-[438px] md:h-[380px] mx-auto tablet:w-[405px] tablet:h-[705px] lg:w-[550px] xl:w-[705px]`}
          >
            <h2
              className={`w-[220px] sm:w-[350px] md:w-[440px] tablet:w-[405px] lg:w-[505px] xl:w-[645px] font-bold text-[#E2DED3] text-[14px] sm:text-[22px] md:text-[27px] tablet:text-[25px] lg:text-[30px] xl:text-[50px] `}
            >
              {card.title}
            </h2>
            <ul
              className={`text-[12px] sm:text-[14px] md:text-[23px] list-disc font-medium mt-[8px] md:mt-[15px] tablet:text-[18px] lg:text-[24px] xl:text-[30px] tablet:mt-[10px] ml-[24px] md:ml-[30px] tablet:ml-[36px]`}
            >
              {card.product_description &&
                card.product_description?.map(description => (
                  <li key={description.id}>
                    <p>{description.description}</p>
                  </li>
                ))}
            </ul>
            <div
              className={`w-[278px] mx-auto font-montserrat sm:w-[424px] md:w-[344px] md:h-[45px] tablet:w-[434px] lg:w-[490px] xl:w-[634px] flex justify-between flex-col tablet:flex-row items-center tablet:mt-[10px] lg:mt-[30px] xl:mt-[87px] gap-x-[3px] mt-[15px]`}
            >
              <p
                className={`font-semibold text-[#d9d9d9] opacity-70 text-[14px] sm:text-[16px] md:text-[27px] mt-[8px] md:mt-[15px] tablet:text-[21px] lg:text-[24px] xl:text-[30px] tablet:mt-[40px]`}
              >
                {t('shopPage.shopPageSection.price') +
                  ' ' +
                  ':' +
                  '  ' +
                  card.price +
                  ' ' +
                  t('shopPage.shopPageSection.currency')}
              </p>
              <div className='mt-[16px] md:mt-[31px] text-center'>
                <a
                  href='https://api.whatsapp.com/send/?phone=996700763736&text&type=phone_number&app_absent=0'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Button variant='buyButton'>
                    {t('shopPage.shopPageSection.buyButton')}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
