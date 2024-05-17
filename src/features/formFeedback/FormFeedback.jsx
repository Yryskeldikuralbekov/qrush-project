import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { t } from 'i18next';
import { ModalWindow } from '../modalWindow/ModalWindow';
import { Button } from '../../shared';
export const FormFeedback = ({ textArr }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onBlur' });
  const [open, setOpen] = useState(false);
  const onSubmit = async data => {
    const botToken = import.meta.env.VITE_TG_TOKEN_BOT;
    const chatId = import.meta.env.VITE_TG_CHAT_ID;
    const messageText = `
Имя: ${data.name}
Ватсапп Номер: ${data.whatsappNumber}
Вопрос:  ${data.feedbackText}`;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const params = {
      chat_id: chatId,
      text: messageText,
    };
    try {
      const response = await axios.post(url, params);
      if (response.status === 200) {
        setOpen(true);
        reset();
      } else {
        console.error(
          `Ошибка при отправке сообщения: ${response.status} - ${response.statusText}`
        );
      }
    } catch (error) {
      console.error('Ошибка при отправке запроса:', error);
    }
  };
  return (
    <section className='mx-[20px] sm:mx-[auto] pb-[70px] lg:pb-[150px] xl:max-w-[1300px] lg:max-w-[900px] text-[#FFFFFF]'>
      <h2 className='pb-[23px] text-[20px] sm:w-full text-center sm:pb-[24px] lg:pb-[80px] sm:text-[24px] xl:text-[50px] lg:text-[30px]'>
        {textArr.title}
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='max-w-[576px] mx-[auto] gap-[20px] xl:flex xl:justify-between xl:max-w-[1300px] lg:max-w-[900px] lg:flex lg:justify-between'
      >
        <div className='w-full'>
          <div>
            <input
              {...register('name', {
                required: t('faqPage.inputs.formField'),
                minLength: {
                  value: 3,
                  message:
                    t('faqPage.inputs.minLengthPrefix') +
                    '3' +
                    t('faqPage.inputs.minLengthSuffix'),
                },
              })}
              className='w-[100%] mb-[27px] py-[10px] pl-[8px] sm:py-[18px] sm:pl-[30px] rounded-[10px] sm:rounded-[30px] outline-none border-solid border-[0.5px] border-[#fff] sm:border-[#6d6d6d] bg-transparent sm:bg-neutral-900/[.30] placeholder:text-[#FFFFFF]'
              type='text'
              name='name'
              placeholder={textArr.firstInput}
            />
            <div className='text-red-600 ml-[5px] text-[14px] -mt-[15px] mb-[20px]'>
              {errors?.name && (
                <p>{errors?.name?.message || t('faqPage.inputs.error')}</p>
              )}
            </div>
          </div>

          <div>
            <input
              {...register('whatsappNumber', {
                required: t('faqPage.inputs.formField'),
                minLength: {
                  value: 6,
                  message:
                    t('faqPage.inputs.minLengthPrefix') +
                    '6' +
                    t('faqPage.inputs.minLengthSuffix'),
                },
                pattern: {
                  value: /^[+\d]+$/,
                  message: 'Номер WhatsApp должен содержать только цифры',
                },
              })}
              className='w-[100%] mb-[27px] py-[10px] pl-[8px] sm:py-[18px] sm:pl-[30px] rounded-[10px] sm:rounded-[30px] outline-none border-solid border-[0.5px] border-[#fff] sm:border-[#6d6d6d] bg-transparent sm:bg-neutral-900/[.30] placeholder:text-[#FFFFFF]'
              type='text'
              placeholder={textArr.secondInput}
            />

            <div className='text-red-600 ml-[5px] -mt-[15px] text-[14px]'>
              {errors?.whatsappNumber && (
                <p>
                  {errors?.whatsappNumber?.message || t('faqPage.inputs.error')}
                </p>
              )}
            </div>
          </div>
          <div className='hidden lg:visible lg:flex gap-[5px] sm:gap-[27px] items-center pt-[20px]'>
            <div>
              <div className='w-full flex gap-2'>
                <input
                  {...register('check', {
                    required: t('faqPage.inputs.formField'),
                  })}
                  id='checkbox'
                  name='check'
                  className='peer relative appearance-none shrink-0 w-[24px] h-[24px] sm:w-[20px] sm:h-[20px] border-solid border-[3px] rounded-[31px] border-[#E2DED3] bg-[#8E8E8E] cheked:border-[#F93822] checked:bg-[#E2DED3] checked:border-[#F93822] transition-all duration-300 cursor-pointer'
                  type='checkbox'
                />

                <svg
                  className='absolute w-[20px] h-[20px] mt-[2px] ml-[2px] sm:w-4 sm:h-4 sm:mt-[1.5px] sm:ml-[1.5px] pointer-events-none hidden peer-checked:block stroke-[#F93822] outline-none'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m4.5 12.75 6 6 9-13.5'
                  />
                </svg>
              </div>
            </div>
            <label htmlFor='checkbox' className='cursor-pointer'>
              <p className='text-[14px] font-[600] xl:text-[14px] md:text-[12px] xl:w-[300px]'>
                {textArr.policyPrivacy}
              </p>
            </label>
          </div>
          <div className='hidden lg:block lg:mx-auto md:right-[10%]'>
            <div className='text-red-600 ml-[5px] mt-[15px] text-[14px]'>
              {errors?.check && (
                <p>{errors?.check?.message || t('faqPage.inputs.error')}</p>
              )}
            </div>

            <div className='mt-[30px] w-full text-center lg:text-left'>
              <Button type='submit' variant='rehearsalButton'>
                {textArr.buttonText}
              </Button>
            </div>
          </div>
        </div>
        <div className='w-[100%]'>
          <div>
            <textarea
              {...register('feedbackText', {
                required: t('faqPage.inputs.formField'),
                minLength: {
                  value: 10,
                  message:
                    t('faqPage.inputs.minLengthPrefix') +
                    '10' +
                    t('faqPage.inputs.minLengthSuffix'),
                },
              })}
              className='w-[100%] mt-[20px] lg:mt-0 mb-[40px] sm:mb-[47px] py-[15px] px-[10px] sm:px-[28px] rounded-[10px] sm:rounded-[30px] outline-none border-solid border-[0.5px] border-[#fff] sm:border-[#6d6d6d] bg-transparent sm:bg-neutral-900/[.30] placeholder:text-[#FFFFFF] overflow-hidden'
              type='text'
              placeholder={textArr.thirdInput}
              rows={12}
            />
            <div className='text-red-600 ml-[5px] -mt-[40px] mb-[5px] text-[14px]'>
              {errors?.feedbackText && (
                <p>
                  {errors?.feedbackText?.message || t('faqPage.inputs.error')}
                </p>
              )}
            </div>
          </div>
          <div className='visible lg:hidden flex gap-[5px] sm:gap-[27px] items-center pt-[20px]'>
            <div>
              <div className='w-full flex gap-2'>
                <input
                  {...register('check', {
                    required: t('faqPage.inputs.formField'),
                  })}
                  id='checkbox'
                  name='check'
                  className='peer relative appearance-none shrink-0 w-[24px] h-[24px] sm:w-[20px] sm:h-[20px] border-solid border-[3px] rounded-[31px] border-[#E2DED3] bg-[#8E8E8E] cheked:border-[#F93822] checked:bg-[#E2DED3] checked:border-[#F93822] transition-all duration-300 cursor-pointer'
                  type='checkbox'
                />

                <svg
                  className='absolute w-[20px] h-[20px] mt-[2px] ml-[2px] sm:w-4 sm:h-4 sm:mt-[1.5px] sm:ml-[1.5px] pointer-events-none hidden peer-checked:block stroke-[#F93822] outline-none'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m4.5 12.75 6 6 9-13.5'
                  />
                </svg>
              </div>
            </div>
            <label htmlFor='checkbox' className='cursor-pointer'>
              <p className='text-[14px] font-[600] xl:text-[14px] md:text-[12px] w-[300px] pl-[10px] sm:pl-0'>
                {textArr.policyPrivacy}
              </p>
            </label>
          </div>
          <div className='visible lg:hidden w-full left-0 lg:mx-auto md:right-[10%]'>
            <div className='text-red-600 ml-[5px] mt-[15px] text-[14px]'>
              {errors?.check && (
                <p>{errors?.check?.message || t('faqPage.inputs.error')}</p>
              )}
            </div>

            <div className='mt-[30px] w-full text-center lg:text-left'>
              <Button type='submit' variant='rehearsalButton'>
                {textArr.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </form>
      <ModalWindow
        text={textArr.modalWindow}
        openModal={open}
        setOpenModal={setOpen}
      />
    </section>
  );
};
