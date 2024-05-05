import { useDeferredValue } from 'react';
import { CardsShopCardsSection } from './cardShopCardsSection/CardsShopCardsSection';

export const ShopCardsSection = ({ shopCards }) => {
  const deferredCards = useDeferredValue(shopCards);
  return (
    <section>
      <ul
        className={` max-w-[1920px] mx-auto mt-[50px] tablet:mt-[100px] mb-[100px] font-montserrat text-[#E2DED3] bg-cover bg-no-repeat bg-center`}
      >
        {deferredCards &&
          deferredCards?.map(card => (
            <li key={card.id}>
              <CardsShopCardsSection card={card} />
            </li>
          ))}
      </ul>
    </section>
  );
};
