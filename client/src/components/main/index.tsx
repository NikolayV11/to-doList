import { ReactElement } from "react";

type Props = {
  children?: ReactElement | ReactElement[];
};

export const Main = ({ children }: Props) => {
  return <main>{children}</main>;
};
