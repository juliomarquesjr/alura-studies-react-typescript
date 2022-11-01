import Botao from "../Botao";
import Relogio from "./Relogio";

import style from "./Cronometro.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";

function Cronometro() {
  console.log("Conversão: ", tempoParaSegundos('01:01:01'))
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o crônometro</p>
      <div className={style.relogioWrapper} >
        <Relogio />
      </div>
      <Botao>Começar!</Botao>
    </div>
  );
}
export default Cronometro;
