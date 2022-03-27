import axios from "https://cdn.skypack.dev/axios";

let Listcontent = document.getElementsByClassName("list-content");
let Addcard = document.getElementsByClassName("Add-card-content");
let ListWrapper = document.getElementsByClassName("list-cards-wrapper-wrapper");
let AddcardButton = document.getElementsByClassName("Add-card-content-text");

function PlusCard(e, i) {
  console.log(i.target.parentNode.id);
  console.log(ListWrapper[i.target.parentNode.id]);
  // Add another card
  let newcard = document.createElement("div");
  newcard.className = "list-card-details";

  let newcardText = document.createElement("span");
  newcardText.className = "list-card-member-title";
  newcardText.textContent = e.target.value;
  console.log("나", Addcard[i.target.parentNode.id]);
  ListWrapper[i.target.parentNode.id].insertBefore(
    newcard,
    Addcard[i.target.parentNode.id]
  );
  newcard.appendChild(newcardText);
  // end another card
}

function PlusInput(e) {
  console.log(e.target.parentNode.id);
  // click Add another card make input

  let Cardinput = document.createElement("input");
  Cardinput.className = "list-card-details";

  function enterkey(ele) {
    if (window.event.keyCode == 13) {
      PlusCard(ele, e);
      ListWrapper[e.target.parentNode.id].removeChild(Cardinput);
    }
  }
  Cardinput.onkeyup = enterkey;

  //end Add another card make input
  console.log(e.target.parentNode);
  Listcontent[e.target.parentNode.id].appendChild(
    ListWrapper[e.target.parentNode.id]
  );
  ListWrapper[e.target.parentNode.id].appendChild(Cardinput);
  ListWrapper[e.target.parentNode.id].insertBefore(
    Cardinput,
    Addcard[e.target.parentNode.id]
  );
}

AddcardButton[0].addEventListener("click", (e) => PlusInput(e));

export { PlusCard, PlusInput };
