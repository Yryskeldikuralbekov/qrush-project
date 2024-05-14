import { Link } from 'react-router-dom';
import { Button, scrollToTop } from '../../../shared';
import { CardSectionGroupMobile } from '../../../shared/ui/cardSectionGroupMobile/CardSectionGroupMobile';

export const SectionGroupMobile = props => {
  const {
    firstDescription,
    secondDescription,
    thirdDescription,
    title,
    firstSubTitle,
    secondSubTitle,
    thirdSubTitle,
    thirdImg,
    firstImg,
    secondImg,
    background,
    button,
  } = props;

  const dataArr = [
    {
      title: firstSubTitle,
      description: firstDescription,
      img: firstImg,
      href: '/rehearsal-cost',
    },
    {
      title: secondSubTitle,
      description: secondDescription,
      img: secondImg,
      href: '/sound-recording',
    },
    {
      title: thirdSubTitle,
      description: thirdDescription,
      img: thirdImg,
      href: '/music-courses',
    },
  ];

  return (
    <section
      className='h-[736px] sm:h-[1533px] bg-cover bg-no-repeat'
      style={{ backgroundImage: `url(${background})` }}
    >
      <section className='mx-auto px-10'>
        <h2 className='text-[#E2DED3] text-center pt-[24px] pb-[17px] sm:pb-[64px] font-[Montserrat] text-[30px] sm:text-[64px] font-bold leading-[normal]'>
          {title}
        </h2>
        <ul className='flex flex-col gap-y-[10px] sm:gap-y-[20px]'>
          {dataArr?.map((item, index) => (
            <Link onClick={scrollToTop} to={item.href} key={index}>
              <CardSectionGroupMobile item={item} />
            </Link>
          ))}
        </ul>
        <Link
          to='services'
          className='flex justify-center mt-[20px] sm:mt-[100px]'
          onClick={scrollToTop}
        >
          <Button variant='moreInfoButton'>{button}</Button>
        </Link>
      </section>
    </section>
  );
};
