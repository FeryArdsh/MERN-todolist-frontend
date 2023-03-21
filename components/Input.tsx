type InputPropsType = {
  register: any;
  validation: any;
  name: string;
  placeholder: string;
  error?: any;
  type?: string;
  props?: any;
};

const Input = ({
  name,
  register,
  validation,
  placeholder,
  error,
  type = 'text',
  ...props
}: InputPropsType) => {
  return (
    <>
      <input
        className="text-black border-zinc-400 border rounded-md py-2 px-3 placeholder:text-zinc-400 placeholder:font-normal outline-none"
        placeholder={placeholder}
        type={type}
        {...register(name, {
          ...validation,
        })}
        {...props}
      />
      <span className="text-xs text-red-700 -mt-2">{error}</span>
    </>
  );
};

export default Input;
