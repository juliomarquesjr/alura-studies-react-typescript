import React from "react";
import { isTemplateExpression } from "typescript";

function Lista() {
  const tarefas = [
    { tarefa: "React", tempo: "02:00:00" },
    { tarefa: "Javascript", tempo: "01:00:00" }, 
    { tarefa: "Typescript", tempo: "03:00:00" }
  ];
  return (
    <aside>
      <h2>Estudos do Dia</h2>
      <ul>
        {tarefas.map((item, index) => {
          return (
            <li key={index}>
              <h3>{item.tarefa}</h3>
              <span>{item.tempo}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
export default Lista;
