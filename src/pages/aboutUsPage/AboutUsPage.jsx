import { Advertising } from '../../shared';
import {
  WhyQRushSection,
  Team,
  IntrodactionSectionAboutUs,
} from '../../widgets';

export const AboutUsPage = () => {
  return (
    <section className='max-w-[1920px] flex flex-col mx-auto'>
      <IntrodactionSectionAboutUs />
      <WhyQRushSection />
      <Team />
      <Advertising />
    </section>
  );
};
