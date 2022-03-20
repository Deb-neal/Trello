let Addlists = document.getElementsByClassName("Add-list-content-text");
console.log(Addlists);

for (var i = 0; i < Addlists.length; i++) {
  Addlists[i].addEventListener("click", function () {
    let Addmain = document.getElementsByClassName("board-content");
    console.log(Object.values(Addmain));
    Addmain[i] = Object.values(Addmain);
    return Addmain;
  });
}
