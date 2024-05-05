import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';
import { useEffect, useRef, useState } from 'react';

import logo from '../../shared/img/rush1.svg';
import { Button, scrollToTop, useMediaQuery } from '../../shared';

const locales = {
  ru: { title: 'Ru' },
  en: { title: 'En' },
  ky: { title: 'KG' },
};
export const Header = () => {
  const isMobileAndTablet = useMediaQuery('( max-width: 1026px)');
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const windowRef = useRef(window);
  const genericHamburgerLine = `h-[2px] w-8 my-[4.9px] rounded-full bg-white transition ease transform duration-300`;
  const headerLinks = [
    {
      route: '/about-us',
      link: t('header.headerLink.linkTitle1'),
    },
    {
      route: '/services',
      link: t('header.headerLink.linkTitle2'),
    },
    {
      route: '/trust-us',
      link: t('header.headerLink.linkTitle3'),
    },
    {
      route: '/news',
      link: t('header.headerLink.linkTitle4'),
    },
    {
      route: '/gallery',
      link: t('header.headerLink.linkTitle5'),
    },
    {
      route: '/shop',
      link: t('header.headerLink.linkTitle7'),
    },
  ];
  if (isMobileAndTablet) {
    headerLinks.push({
      route: '/faq',
      link: t('header.headerLink.linkTitle6'),
    });
  }
  const handleCLick = locale => {
    i18n.changeLanguage(locale);
    windowRef.current.location.reload();
  };
  return (
    <header
      className={`${isOpen ? 'bg-black ' : 'bg-black/50 backdrop-opacity-10 backdrop-invert'} z-10  h-[80px]  w-full flex justify-center  top-0 backdrop-blur-30 fixed `}
    >
      <section className='bg-cover bg-no-repeat bg-center container '>
        <nav className=' mx-auto flex justify-between items-center container '>
          <Link to={'/'} className='mr-[4vw]' onClick={scrollToTop}>
            <img
              src={logo}
              className='xl:w-[203px] xl:h-[100px]  lg:w-[181px] lg:h-[80px] tablet:w-[223px]  tablet:h-[120px] md:w-[200px] md:h-[100px] sm:w-[181px] sm:h-[80px] flex align-center'
              alt='Q-RUSH logo'
            />
          </Link>
          {isMobileAndTablet ? (
            <div className='flex flex-row items-center gap-[20px]'>
              <ul className='uppercase text-nowrap flex gap-2 ml-4 text-gray-500 xl:text-lg text-sm lg:text-base'>
                {Object.keys(locales).map(locale => (
                  <li key={locale}>
                    <button
                      className={`focus:text-gray-100 hover:text-orange-500 ${
                        i18n.resolvedLanguage === locale
                          ? 'text-white'
                          : 'text-gray-500'
                      }`}
                      style={{
                        fontWeight:
                          i18n.resolvedLanguage === locale ? 'bold' : 'normal',
                      }}
                      type='submit'
                      onClick={() => handleCLick(locale)}
                    >
                      {locales[locale].title}
                    </button>
                  </li>
                ))}
              </ul>
              <button
                className='flex flex-col h-14 w-14  justify-center items-center group'
                onClick={() => setIsOpen(!isOpen)}
              >
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen
                      ? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100'
                      : 'opacity-50 group-hover:opacity-100'
                  }`}
                />
                <div
                  className={`${genericHamburgerLine} ${isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'}`}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen
                      ? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100'
                      : 'opacity-50 group-hover:opacity-100'
                  }`}
                />
              </button>

              <div
                className={`${isOpen ? 'block' : 'hidden'} absolute top-[100px] w-[100%] left-0 right-0 bg-black text-[24px] font-montserrat `}
              >
                <div className='flex flex-col  text-white p-[20px]'>
                  {headerLinks.map((routes, index) => (
                    <li
                      className='list-none p-[10px]'
                      key={index}
                      onClick={() => setIsOpen(false)}
                    >
                      <Link
                        className=''
                        onClick={scrollToTop}
                        to={routes.route}
                      >
                        {routes.link}
                      </Link>
                    </li>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <>
              <ul className='flex flex-row justify-around text-nowrap text-gray-100 font-montserrat leading-normal xl:text-2xl xl:gap-8 lg:text-lg lg:gap-5 tablet:text-base tablet:gap-3 md:text-xs md:gap-2 sm:text-xs sm:gap-1'>
                {headerLinks.map((routes, index) => (
                  <li key={index}>
                    <Link onClick={scrollToTop} to={routes.route}>
                      {routes.link}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className='flex items-center justify-between font-montserrat leading-normal'>
                <ul className='uppercase flex gap-2 ml-4 text-gray-500 xl:text-lg text-sm lg:text-base'>
                  {Object.keys(locales).map(locale => (
                    <li key={locale}>
                      <button
                        className={`focus:text-gray-100 hover:text-orange-500 ${
                          i18n.resolvedLanguage === locale
                            ? 'text-white'
                            : 'text-gray-500'
                        }`}
                        type='submit'
                        onClick={() => handleCLick(locale)}
                      >
                        {locales[locale].title}
                      </button>
                    </li>
                  ))}
                </ul>
                <a
                  target='_blank'
                  href='https://api.whatsapp.com/send/?phone=996700763736&text&type=phone_number&app_absent=0'
                  rel='noreferrer'
                >
                  <Button variant={'headerButton'}>
                    {t('header.headerButton')}
                  </Button>
                </a>
              </div>
            </>
          )}
        </nav>
      </section>
    </header>
  );
};
