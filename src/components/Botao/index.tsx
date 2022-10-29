import * as React from "react";
import style from "./Botao.module.scss";

type Props = {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
};

const Botao: React.FC<Props> = ({ children, type }) => {
  return (
    <button type={type} className={style.botao}>
      {children}
    </button>
  );
};

export default Botao;
