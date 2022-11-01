import Botao from "../Botao";
import Relogio from "./Relogio";

import style from "./Cronometro.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefas";
import { useState } from "react";

interface Props {
  selecionado: ITarefa | undefined
}

function Cronometro({selecionado} : Props) {
  const [tempo, setTempo] = useState<number>();

  if(selecionado?.tempo){
    setTempo(tempoParaSegundos(selecionado.tempo))
  }

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
