import axios from "https://cdn.skypack.dev/axios";

let Listcontent = document.getElementsByClassName("list-content");
let Addcard = document.getElementsByClassName("Add-card-content");
let ListWrapper = document.getElementsByClassName(
  "list-cards-wrapper-wrapper"
)[0];
let AddcardButton = document.getElementsByClassName("Add-card-content-text");

function Card(e) {
  if (e) {
    Addcard[e].addEventListener("click", function () {
      let newcard = document.createElement("div");
      newcard.className = "list-card-details";

      let newcardText = document.createElement("span");
      newcardText.className = "list-card-member-title";
      newcardText.textContent = "";

      // click Add another card make input
      let Cardinput = document.createElement("input");
      Cardinput.className = "list-card-details";

      function enterkey() {
        if (window.event.keyCode == 13) {
          newcardText.textContent = Cardinput.value;
          ListWrapper.removeChild(Cardinput);
          ListWrapper.insertBefore(newcard, Addcard[e]);
        }
      }
      Cardinput.onkeyup = enterkey;

      Listcontent[e].appendChild(Cardinput);
      ListWrapper.insertBefore(Cardinput, Addcard[e]);
      newcard.appendChild(newcardText);
      // end Add another card make input
    });
  }
}

Card();

export default Card;
