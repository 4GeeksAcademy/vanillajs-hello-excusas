/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.addEventListener("DOMContentLoaded", function() {
  const who = ["Mi perro", "Mi abuela", "Mi hermano", "Mi vecino"];
  const action = ["se comió", "rompió", "escondió", "olvidó"];
  const what = ["mi tarea", "las llaves", "el control remoto"];
  const when = [
    "antes de la clase",
    "justo a tiempo",
    "cuando terminé",
    "durante mi almuerzo",
    "mientras rezaba"
  ];

  const excuseElement = document.getElementById("excuse");
  const generateButton = document.getElementById("generate-excuse-btn");
  const excuseListElement = document.getElementById("excuse-list");

  function generarExcusa() {
    const excusa = `${who[Math.floor(Math.random() * who.length)]} ${
      action[Math.floor(Math.random() * action.length)]
    } ${what[Math.floor(Math.random() * what.length)]} ${
      when[Math.floor(Math.random() * when.length)]
    }`;
    return excusa;
  }

  function mostrarExcusa() {
    const nuevaExcusa = generarExcusa();
    excuseElement.textContent = nuevaExcusa;
    agregarExcusaAlHistorial(nuevaExcusa);
  }

  function agregarExcusaAlHistorial(excusa) {
    const li = document.createElement("li");
    li.textContent = excusa;
    li.classList.add("list-group-item");
    excuseListElement.appendChild(li);
  }

  generateButton.addEventListener("click", mostrarExcusa);
});
