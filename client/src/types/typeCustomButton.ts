import React from "react";
import { PropsTypeToolTip } from "./";

export type TypeBtnCustom = PropsTypeToolTip &
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    textBtn?: string;
  };
