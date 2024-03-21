import { useTranslation } from 'react-i18next';
import { TrustUsMain, Preview } from '../../widgets';
import { Reserve } from '../../shared';

export const TrustUs = () => {
  const { t } = useTranslation();
  return (
    <div>
      <TrustUsMain />
      <Preview />
      <Reserve
        h3={t('trustUsPage.fourthSection.title')}
        p={t('trustUsPage.fourthSection.upperTitle')}
      />
    </div>
  );
};
