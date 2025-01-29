/* eslint-disable react/prop-types */

const InputBox = ({ type, placeholder, name, value, onChange, error }) => {
  return (
    <div className="w-full">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`px-4 py-2 border ${
          error ? 'border-red-500' : 'border-gray-400'
        } rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none w-full`}
      />
      {error && <span className="text-red-500 text-sm mt-1 block">{error}</span>}
    </div>
  );
};

export default InputBox;