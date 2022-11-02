import * as React from "react";
import style from "./Botao.module.scss";

type Props = {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void //Recebendo uma função por props
};

const Botao: React.FC<Props> = ({ children, type, onClick }) => {
  return (
    <button type={type} className={style.botao} onClick={onClick}>
      {children}
    </button>
  );
};

export default Botao;
