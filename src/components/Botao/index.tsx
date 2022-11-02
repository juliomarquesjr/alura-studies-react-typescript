import * as React from "react";
import style from "./Botao.module.scss";

type Props = {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void //Recebendo uma função por props
};

function Botao ({ children, type, onClick }: Props){
  return (
    <button type={type} className={style.botao} onClick={onClick}>
      {children}
    </button>
  );
};

export default Botao;
