let docAdd = document.getElementById("add-item");
let addIte = document.getElementById("addite");
let savIte = document.getElementById("savite");
let saveList = document.getElementById("save-list");
let loadList = document.getElementById("load-list");
let storage = document.getElementById("storage");

let cursed = document.getElementById("cursed");
let ooga = document.getElementById("ooga");
let list = document.getElementById("list");
let waltham = document.getElementById("waltham");
let booga = document.getElementById("booga");

let pip = document.getElementsByClassName("list-item2");
let trash = document.getElementById("trash");
let gogleBlok = localStorage.getItem("sgl-list");
let nogleBlok = localStorage.getItem("sve-list2");

function mode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}

let bogleBlok = 0;

setTimeout(function () {
  if (nogleBlok === "" || nogleBlok === null || nogleBlok === undefined) {
  bogleBlok = [];
}

else {
  bogleBlok = nogleBlok.split();
  let exGf = mode(bogleBlok);

  let x = booga.value;
    let newArr = String(gogleBlok).split("./././");

    for (i = 0; i < newArr.length; i++) {
      let kalt = newArr[i].split(",>-=");

      if (kalt[0] === x) {
        waltham.innerHTML = kalt[1];
        
        docAdd.style.display = "block";
        saveList.style.display = "block";
      }

      else {
        booga.value = "List Doesn't Exist";

        if (i === newArr.length - 1) {
          loadList.style.display = "none";
          booga.value = "";
          docAdd.style.display = "block";
          saveList.style.display = "block";
        }
      }
    }
}
}, 100);

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
    let newArr = String(gogleBlok).split("./././");
    let sano = false;

    for (i = 0; i < newArr.length; i++) {
      let kalt = newArr[i].split(",>-=");

      if (kalt[0] === cursed.value) {
        cursed.value = "List Already Exists";
        sano = true;
      }
    }
    
    if (sano === true) {
      // do nothing
    }

    else {
      waltham.innerHTML = "<section class='list-item2' onclick='let xyz = $(`.list-item2`).index(this); pip[xyz].style.display = `none`;'>" + cursed.value + "</section>" + waltham.innerHTML;
      docAdd.style.display = "block";
      addIte.style.display = "none";
      bogleBlok.push(cursed.value);
      cursed.value = "";
    }
  }
}

savite.onclick = function () {
  if (ooga.value === "" || ooga.value === null || ooga.value === undefined) {
    ooga.value = "";
  }

  else {
    saveList.style.display = "block";
    savite.style.display = "none";
    localStorage.setItem("sgl-list", String(gogleBlok) + "./././" + ooga.value + ",>-=" + waltham.innerHTML);
    ooga.value = "";
  }
}

loadList.onclick = function () {
  if (booga.value === "" || booga.value === null || booga.value === undefined) {
    booga.value = "";
  }

  else {
    let x = booga.value;
    let newArr = String(gogleBlok).split("./././");

    for (i = 0; i < newArr.length; i++) {
      let kalt = newArr[i].split(",>-=");

      if (kalt[0] === x) {
        waltham.innerHTML = kalt[1];
        
        docAdd.style.display = "block";
        saveList.style.display = "block";
        bogleBlok.push(oooga.value);
      }

      else {
        booga.value = "List Doesn't Exist";

        if (i === newArr.length - 1) {
          loadList.style.display = "none";
          booga.value = "";
          docAdd.style.display = "block";
          saveList.style.display = "block";
        }
      }
    }
  }
}

storage.onclick = function () {
  docAdd.style.display = "none";
  saveList.style.display = "none";
  loadList.style.display = "block";
}

trash.onclick = function () {
  waltham.innerHTML = "";
}

setInterval(function () {
  localStorage.setItem("sve-list2", String(bogleBlok));
}, 200);