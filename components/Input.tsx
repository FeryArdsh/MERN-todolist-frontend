const Input = (props: any) => {
  return (
    <>
      <input
        className="text-black border-zinc-400 border rounded-md py-2 px-3 placeholder:text-zinc-400 placeholder:font-normal"
        {...props}
      />
    </>
  );
};

export default Input;
