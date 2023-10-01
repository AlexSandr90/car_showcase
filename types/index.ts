import { MouseEventHandler } from 'react';

export interface CustomButtonProps {
  title: string;
  btnType?: 'submit' | 'reset' | 'button' | undefined;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
