import React, { FC } from "react";

type FooterProps = {
  children?: React.ReactNode;
};

const Footer: FC<FooterProps> = (props) => {
  return <div className="text-center text-2xl">Don't Forget</div>;
};

export default Footer;
