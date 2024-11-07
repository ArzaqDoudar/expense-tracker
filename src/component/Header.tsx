import React from "react";
interface Props {
  text: string;
}

const Header = ({ text }: Props) => {
  return <div className="fs-3 fw-bold text-center">{text}</div>;
};

export default Header;
