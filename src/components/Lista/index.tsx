import { ITarefa } from "../../types/tarefas";
import Item from "./Item";
import style from "./Lista.module.scss";

interface Props {
  tarefas: ITarefa[];
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

function Lista({ tarefas, selecionaTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do Dia</h2>
      <ul>
        {tarefas.map((item) => {
          return (
            <Item selecionaTarefa={selecionaTarefa} key={item.id} {...item} />
          );
        })}
      </ul>
    </aside>
  );
}
export default Lista;
