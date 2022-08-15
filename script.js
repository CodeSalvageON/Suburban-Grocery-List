let docAdd = document.getElementById("add-item");
let addIte = document.getElementById("addite");
let savIte = document.getElementById("savite");
let saveList = document.getElementById("save-list");

let cursed = document.getElementById("cursed");
let ooga = document.getElementById("ooga");
let list = document.getElementById("list");
let waltham = document.getElementById("waltham");

let pip = document.getElementsByClassName("list-item2");
let trash = document.getElementById("trash");

docAdd.onclick = function () {
  docAdd.style.display = "none";
  addIte.style.display = "block";
}

saveList.onclick = function () {
  saveList.style.display = "none";
  savIte.style.display = "block";
}

addIte.onclick = function () {
  if (cursed.value === "" || cursed.value === null || cursed.value === undefined) {
    cursed.value = "";
  }

  else {
    waltham.innerHTML = "<section class='list-item2' onclick='let xyz = $(`.list-item2`).index(this); pip[xyz].style.display = `none`;'>" + cursed.value + "</section>" + waltham.innerHTML;
    docAdd.style.display = "block";
    addIte.style.display = "none";
    cursed.value = "";
  }
}

savite.onclick = function () {
  if (ooga.value === "" || ooga.value === null || ooga.value === undefined) {
    ooga.value = "";
  }

  else {
    ooga.value = "";
    saveList.style.display = "block";
    savite.style.display = "none";
  }
}

trash.onclick = function () {
  waltham.innerHTML = "";
}