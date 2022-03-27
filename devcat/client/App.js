import axios from "https://cdn.skypack.dev/axios";
import Card from "./Card.js";

//parent Node
let BoardContent = document.getElementsByClassName("board-content");
console.log("보드컨텐츠", BoardContent[0]);
let Addlist = document.getElementsByClassName("Add-list-content");
console.log("에드리스트", Addlist);
let Add = document.getElementsByClassName("list-content");

let count = 0;

let newCard = document.createElement("div");
newCard.id = count++;
newCard.className = "Add-card-content";

// make new list item
function Pluslists(e) {
  console.log();
  let newlist = document.createElement("div");
  newlist.className = "list-content";

  let listheader = document.createElement("div");
  listheader.className = "list-header";

  let listheaderText = document.createElement("h2");
  listheaderText.className = "list-header-title";

  let newlistWrapper = document.createElement("div");
  newlistWrapper.className = "list-cards-wrapper-wrapper";

  let newCard = document.createElement("div");
  newCard.id = count++;
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

      //
      // newCard.addEventListener("click", function (e) {
      //   Card(e.target.parentNode.id);
      // });
    }
  }
}

// end Add another list make input

Addlist[0].addEventListener("click", () => PluslistsInput());

// for (let i = 0; i < Addlist.length; i++) {
//   Addlist[i].addEventListener("click", function (e) {
// click Add another list make input
//     console.log("이건 뭐지", e.target);
//     function enterkey() {
//       if (window.event.keyCode == 13) {
//         listheaderText.textContent = inputText.value;
//         BoardContent[i].removeChild(inputText);

//         Addmain.appendChild(newlist);
//         Addmain.insertBefore(newlist, Addlist[0]);

//         newlist.appendChild(listheader);
//         listheader.appendChild(listheaderText);
//         newlist.appendChild(newlistWrapper);
//         newlistWrapper.appendChild(newCard);

//         //
//         newCard.addEventListener("click", function (e) {
//           Card(e.target.parentNode.id);
//         });
//         newCard.appendChild(Plusicon);
//         newCard.appendChild(AddCard);
//       }
//     }

//     inputText.onkeyup = enterkey;
//     BoardContent[0].appendChild(inputText);
//     Addmain.insertBefore(inputText, Addlist[i]);

//     // end Add another list make input
//   });
// }

// const handleSubmit = () => {
//   axios
//     .post("http://localhost:4000/makeList", {}, { withCredentials: true })
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
