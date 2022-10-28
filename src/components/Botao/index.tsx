import * as React from "react";
import style from "./Botao.module.scss";

type Props = { children?: React.ReactNode };

const Botao: React.FC<Props> = ({ children }) => {
  return <button className={style.botao}>{children}</button>;
};

export default Botao;
