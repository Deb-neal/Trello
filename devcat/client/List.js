import axios from "https://cdn.skypack.dev/axios";
import { PlusCard, PlusInput } from "./Card.js";

//parent Node
let BoardContent = document.getElementsByClassName("board-content");
let Addlist = document.getElementsByClassName("Add-list-content");
let Addcard = document.getElementsByClassName("Add-card-content");
let count = 0;

// make new list item
function Pluslists(e) {
  count++;

  let newlist = document.createElement("div");
  newlist.className = "list-content";

  let listheader = document.createElement("div");
  listheader.className = "list-header";

  let listheaderText = document.createElement("h2");
  listheaderText.className = "list-header-title";

  let newlistWrapper = document.createElement("div");
  newlistWrapper.id = count;
  newlistWrapper.className = "list-cards-wrapper-wrapper";

  let newCard = document.createElement("div");
  newCard.id = count;
  newCard.className = "Add-card-content";

  let Plusicon = document.createElement("i");
  Plusicon.className = "fa-solid fa-plus";

  let AddCard = document.createElement("p");
  AddCard.className = "Add-card-content-text";
  AddCard.textContent = "Add another card";

  newlist.appendChild(listheader);
  listheader.appendChild(listheaderText);
  newlist.appendChild(newlistWrapper);
  newlistWrapper.appendChild(newCard);
  newCard.appendChild(Plusicon);
  newCard.appendChild(AddCard);
  newCard.addEventListener("click", (e) => {
    PlusInput(e);
  });

  let inputText = document.createElement("input");
  inputText.className = "newList";
  listheaderText.textContent = e.target.value;
  e.target.parentNode.appendChild(newlist);
  e.target.parentNode.insertBefore(newlist, Addlist[0]);
}

// end make new list

// click Add another list make input

function PluslistsInput() {
  let inputText = document.createElement("input");
  inputText.className = "newList";
  BoardContent[0].appendChild(inputText);
  BoardContent[0].insertBefore(inputText, Addlist[0]);
  inputText.onkeyup = enterkey;
  function enterkey(ele) {
    if (window.event.keyCode == 13) {
      Pluslists(ele);
      ele.target.parentNode.removeChild(inputText);
    }
  }
}

// end Add another list make input

Addlist[0].addEventListener("click", () => PluslistsInput());

export { Pluslists, PluslistsInput };
