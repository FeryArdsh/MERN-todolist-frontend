type ButtonPropsType = {
  text: string;
  type?: 'button' | 'submit' | 'reset';
};

const Button = ({ type = 'button', text }: ButtonPropsType) => {
  return (
    <button
      className="text-black bg-primary rounded-md py-2 w-full"
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
