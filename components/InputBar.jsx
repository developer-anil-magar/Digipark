const InputBar = () => {
  return (
    <div className="flex bg-gray-8 rounded-33 w-full md:w-[556px] h-[70px] pl-8 py-[11px]">
      <input
        type="text"
        placeholder="Enter your email address"
        className="w-full h-full bg-transparent  text-white-1 normal-20 focus:outline-none"
      />

      <button className="w-[200px] h-full bg-blue-1 rounded-33 mx-[11px]">
        Get Access{' '}
      </button>
    </div>
  );
};

export default InputBar;
