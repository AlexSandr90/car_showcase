import { MouseEventHandler } from 'react';

export interface CustomButtonProps {
  title: string;
  btnType?: 'submit' | 'reset' | 'button' | undefined;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  sesetManufacturer: (manufacturer: string) => void;
}
