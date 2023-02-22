import React, { FC } from "react";

type InputProps = {
  label?: React.ReactNode;
  error?: React.ReactNode;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "className">;

const Input: FC<InputProps> = (props) => {
  const { label, error, ...rest } = props;
  return (
    <div className="flex flex-col">
      {!!label && (
        <label
          className="text-sm text-gray-300 font-medium cursor-pointer"
          htmlFor={rest.id}
        >
          {label}
        </label>
      )}
      <input
        type="text"
        className="h-10 rounded bg-gray-700 focus:outline-none px-4 text-gray-200"
        {...rest}
      />
      {!!error && <p className="text-sm text-right text-red-700">{error}</p>}
    </div>
  );
};

export default Input;
