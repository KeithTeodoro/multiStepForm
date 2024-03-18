import { forwardRef } from "react";

const Input = forwardRef(({ placeholder, props, label }, ref) => {
  return (
    <div>
      <label className="block text-md font-medium text-marineBlue">
        {label}
      </label>

      <input
        type="email"
        id="UserEmail"
        placeholder={placeholder}
        className="w-full rounded-md py-3 px-4 border border-gray-400 text-lg"
      />
    </div>
  );
});

export default Input;
