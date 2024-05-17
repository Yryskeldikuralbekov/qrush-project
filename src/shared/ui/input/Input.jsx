export const Input = ({
  variant,
  type = 'text',
  placeholder,
  onChange,
  value,
}) => {
  const styles = {
    filterInput:
      'w-[339px] sm:w-[478px] md:w-[612px] tablet:w-[850px] lg:w-[970px] xl:w-[1070px] h-[50px] md:h-[70px] xl:h-[93px] font-semibold text-[20px] text-[#e2ded3] bg-[rgba(22,_22,_22,_0.7)] border-[1px] border-[solid] border-[#e2ded3] rounded-[30px] px-[20px] py-0 ',
  };

  const className = variant && styles[variant] ? styles[variant] : 'default';

  return (
    <input
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className={`${className}`}
    ></input>
  );
};
