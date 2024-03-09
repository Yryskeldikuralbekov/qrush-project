import { useTranslation } from 'react-i18next';
import { CustomButton } from '../../button/CustomButton';


export const Reserve = (props) => {
  const { t } = useTranslation();
  return (
    <div className="bg-cover bg-no-repeat bg-center h-[450px] bg-[#F93822]">
      <div className="w-[1720px] h-[450px] mx-auto flex justify-center items-center">
        <div className="w-[1705px] w-[1164px] h-[221px] text-center">
          <h3 className="text-[50px] font-semibold font-montserrat text-[#161616] mb-[20px]">
            {props.h3}
          </h3>
          <p className="text-[rgba(22,_22,_22,_0.80)] text-center mb-[50px] font-[Montserrat] text-[25px] not-italic font-semibold leading-[normal]">
            {props.p}
          </p>
          <CustomButton txt={t('trustUsPage.fourthSection.buttonInner')} />
        </div>
      </div>
    </div>
  );
};
