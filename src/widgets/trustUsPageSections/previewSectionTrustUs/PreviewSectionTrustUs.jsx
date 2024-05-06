import { useEffect } from 'react';
import { useZustandStore } from '../../../app/store/store';
import { CelebritiesSection } from '../../../entities';

export const PreviewSectionTrustUs = () => {
  const { getTrustUsCelebrities, celebrities } = useZustandStore();
  useEffect(() => {
    getTrustUsCelebrities();
  }, []);

  return (
    <section>
      <div className='bg-cover bg-no-repeat bg-center bg-[#000] '>
        <CelebritiesSection celebrities={celebrities} />
      </div>
    </section>
  );
};
