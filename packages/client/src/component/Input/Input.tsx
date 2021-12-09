import React from "react";

type Props = {
  className?: string;
  type: string;
  value?: string;
  name?: string;
  label?: React.ReactNode;
  onChange: (value: string, name?: string) => void;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  attributes?: Record<string, string | boolean | number>;
  onBlur?: () => void;
  accept?: string;
};

const Input: React.FC<Props> = ({
  className,
  type,
  name,
  label,
  placeholder,
  value,
  disabled = false,
  required,
  onChange,
  attributes = {},
  onBlur,
  accept,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <div className="flex flex-col mb-5">
      <label className="mb-1 text-xs tracking-wide text-gray-600">
        {label}
        {required && <span className="text-red-500 mx-2">*</span>}
      </label>
      <div className="relative">
        <div
          className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
        >
          <i className="fas fa-at text-blue-500"></i>
        </div>

        <input
          className="
        text-sm
        placeholder-gray-500
        pl-10
        pr-4
        rounded-2xl
        border border-gray-400
        w-full
        py-2
        focus:outline-none focus:border-blue-400
      "
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          required={required}
          disabled={disabled}
          {...attributes}
          onBlur={() => onBlur && onBlur()}
          accept={accept}
        />
      </div>
    </div>
  );
};

export default Input;
