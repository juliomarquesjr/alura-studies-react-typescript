import { ITarefa } from "../../types/tarefas";
import Item from "./Item";
import style from "./Lista.module.scss";

function Lista({tarefas}: {tarefas: ITarefa[]}) {

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do Dia</h2>
      <ul>
        {tarefas.map((item, index) => {
          return <Item key={index} {...item} />;
        })}
      </ul>
    </aside>
  );
}
export default Lista;
