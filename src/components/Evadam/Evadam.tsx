import React from "react";

export interface ButtonProps {
  label: string;
}

const Evadam = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export default Evadam;