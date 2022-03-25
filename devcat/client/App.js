import axios from "https://cdn.skypack.dev/axios";

//parent Node
let BoardContent = document.getElementsByClassName("board-content");
let Addlist = document.getElementsByClassName("Add-list-content");
console.log(Addlist);
let Add = document.getElementsByClassName("list-content");

for (var i = 0; i < Addlist.length; i++) {
  Addlist[i].addEventListener("click", function () {
    let Addmain = document.getElementsByClassName("board-content")[0];

    let newlist = document.createElement("div");
    newlist.className = "list-content";

    let newlistWrapper = document.createElement("div");
    newlistWrapper.className = "list-cards-wrapper-wrapper";

    let newCard = document.createElement("div");
    newCard.className = "Add-card-content";

    let Plusicon = document.createElement("i");
    Plusicon.className = "fa-solid fa-plus";

    let AddCard = document.createElement("p");
    AddCard.className = "Add-card-content-text";

    AddCard.textContent = "Add another card";

    Addmain.insertBefore(newlist, Addlist[0]);

    // Addmain.appendChild(newlist);
    newlist.appendChild(newlistWrapper);
    newlistWrapper.appendChild(newCard);
    newCard.appendChild(Plusicon);
    newCard.appendChild(AddCard);

    return Addmain;
  });
}

console.log(BoardContent);

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

// handleSubmit();
