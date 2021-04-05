/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = excuse();
  });

  console.log("Hello Rigo from the console!");
};
let excuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoIdx = Math.floor(Math.random() * who.length);
  let actIdx = Math.floor(Math.random() * action.length);
  let whatIdx = Math.floor(Math.random() * what.length);
  let whenIdx = Math.floor(Math.random() * when.length);
  return (
    who[whoIdx] +
    " " +
    action[actIdx] +
    " " +
    what[whatIdx] +
    " " +
    when[whenIdx]
  );
};
