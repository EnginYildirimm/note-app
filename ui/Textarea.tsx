import React, { FC } from "react";

type TextareaProps = {
  label?: React.ReactNode;
  error?: React.ReactNode;
} & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "className">;

const Textarea: FC<TextareaProps> = (props) => {
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
      <textarea
        className="py-4 rounded bg-gray-700 focus:outline-none px-4 text-gray-200"
        {...rest}
      />
      {!!error && <p className="text-sm text-right text-red-700">{error}</p>}
    </div>
  );
};

export default Textarea;
