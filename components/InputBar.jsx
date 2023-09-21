const InputBar = ({ bgInput, bgButton }) => {
  return (
    <div
      className={`flex rounded-33 w-full h-[60px] md:w-[556px] md:h-[70px] pl-8 py-[11px] ${bgInput}`}>
      <input
        type="text"
        placeholder="Enter your email address"
        className={`w-full h-full bg-transparent normal-20 focus:outline-none text-white-1 }`}
      />

      <button
        className={`w-[200px] h-full  rounded-33 mx-[11px] text-white-1 ${bgButton}`}>
        Get Access{' '}
      </button>
    </div>
  );
};

export default InputBar;
