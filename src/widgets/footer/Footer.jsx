import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import instagram from '../../shared/img/footer/instagram.svg';
import telegram from '../../shared/img/footer/telegram.svg';
import youTube from '../../shared/img/footer/youtube.svg';
import whatsapp from '../../shared/img/footer/whatsapp.svg';
import { scrollToTop } from '../../shared';
import { GeeksProSection } from './geeksProSection/GeeksProSection';

export const Footer = () => {
  const { t } = useTranslation();
  const footerLinks = [
    {
      title: { title: t('footer.aboutUs.mainLink'), route: '/about-us' },
      links: [
        { route: '/trust-us', title: t('footer.aboutUs.secondLinks.link1') },
        { route: '/gallery', title: t('footer.aboutUs.secondLinks.link2') },
      ],
    },
    {
      title: { title: t('footer.news.mainLink'), route: '/news' },
      links: [
        { route: '/faq', title: t('footer.news.secondLinks.link1') },
        { route: '/', title: t('footer.news.secondLinks.link2') },
      ],
    },
    {
      title: { title: t('footer.services.mainLink'), route: '/services' },
      links: [
        {
          route: '/rehearsal-cost',
          title: t('footer.services.secondLinks.link1'),
        },
        {
          route: '/sound-recording',
          title: t('footer.services.secondLinks.link2'),
        },
        {
          route: '/music-courses',
          title: t('footer.services.secondLinks.link3'),
        },
        { route: '/shop', title: t('footer.services.secondLinks.link4') },
      ],
    },
  ];
  return (
    <footer className=' bg-cover bg-no-repeat bg-center max-w-full'>
      <div className=' container w-[90%] mx-auto bg-black pt-[50px] pb-[50px] '>
        <div className=' text-[#d4d4d4] flex flex-col tablet:flex-row justify-around items-start   font-montserrat  xl:text-[20px] xl:[&>ul>li]:mb-[30px] text-[12px] lg:text-[16px] [&>ul>li]:mb-[10px] lg:[&>ul>li]:mb-[20px]  tablet:mb-[6px] tablet:text-[14px] tablet:[&>ul>li]:mb-[10px] tablet:items-start tablet:[&>ul]:mb-[100px] md:text-[18px] md:[&>ul>li]:mb-[8px] md:items-start  '>
          {footerLinks.map((section, index) => (
            <ul key={index}>
              <li className='font-bold text-white hover:text-orange-600'>
                <Link to={section.title.route} onClick={scrollToTop}>
                  {section.title.title}
                </Link>
              </li>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    to={link.route}
                    onClick={scrollToTop}
                    className='hover:text-orange-600'
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          ))}

          <ul>
            <li className='  font-bold text-white hover:text-orange-600'>
              <Link to={'faq'}>{t('footer.contacts.mainLink')}</Link>
            </li>
            <li>
              <a
                target='_blank'
                href='https://go.2gis.com/9do9b'
                className='hover:text-orange-600'
                rel='noreferrer'
              >
                {t('footer.contacts.secondLinks.link1')}
              </a>
            </li>
            <li className='md:flex md:items-center'>
              <a
                target='_blank'
                href='https://go.2gis.com/9do9b'
                className='hover:text-orange-600'
                rel='noreferrer'
              >
                {t('footer.contacts.secondLinks.link2')}
              </a>
              <span className='text-[#fff] xl:text-[30px] lg:text-[22px] tablet:text-[16px] md:text-[14px] sm:text-[12px] pl-[10px]'>
                →
              </span>
            </li>
            <li>
              <a
                target='_blank'
                href='tel:+996700763736'
                className='hover:text-orange-600'
                rel='noreferrer'
              >
                {t('footer.contacts.secondLinks.link3')}
              </a>
            </li>
            <li>
              <p className='hover:text-orange-600 cursor-pointer'>
                {t('footer.contacts.secondLinks.link4')}
              </p>
            </li>
          </ul>
        </div>
        <div className='flex-row flex justify-center gap-[10vw] mt-[10vh] xl:[&>img]:w-[50px]  tablet:[&>img]:w-[40px] sm:[&>img]:w-[30px]  '>
          <a target='_blank' href='https://t.me/taihop' rel='noreferrer'>
            {' '}
            <img src={telegram} alt='telegram' />
          </a>
          <a
            target='_blank'
            href='https://ig.me/m/qrushstudio'
            rel='noreferrer'
          >
            <img src={instagram} alt='instagram' />
          </a>
          <a
            target='_blank'
            href='https://www.youtube.com/@qrushstudio5574'
            rel='noreferrer'
          >
            {' '}
            <img src={youTube} alt='youTube' />
          </a>
          <a
            target='_blank'
            href='https://api.whatsapp.com/send/?phone=996700763736&text&type=phone_number&app_absent=0'
            rel='noreferrer'
          >
            {' '}
            <img src={whatsapp} alt='whatsapp' />
          </a>
        </div>
      </div>
      <GeeksProSection />
    </footer>
  );
};
