'use client';

import React, { FC, ChangeEvent } from "react";
import style from './style.module.scss';

interface TextFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const TextField: FC<TextFieldProps> = ({ value, onChange, placeholder }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      className={style.textField}
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default TextField;
