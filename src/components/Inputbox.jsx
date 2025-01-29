/* eslint-disable react/prop-types */

const InputBox = ({ placeholder, type = "text", value , onChange}) => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center gap-2">
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="px-4 py-3 border-gray-400 border rounded-sm focus:ring-2 focus:ring-blue-500 focus:outline-none w-[620px]"
        />
      </div>
    </div>
  );
};

export default InputBox;
