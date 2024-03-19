import { useTranslation } from 'react-i18next';
import { Reserve } from '../../shared';
import { AboutUs, WhyQRush, Team } from '../../widgets';
// import aboutUs from '../../shared/img/aboutUs.png';

export const About = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="about_bg bg-[url('src/shared/img/aboutUs.png')] max-w-[1920px] flex flex-col mx-auto">
        <AboutUs />
        <WhyQRush />
        <Team />
        <Reserve
          h3={t('aboutUs.fourthSection.title')}
          p={t('aboutUs.fourthSection.upperTitle')}
        />
      </div>
    </div>
  );
};
