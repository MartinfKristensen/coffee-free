var coffeString = " Days without coffee";

function newLoad() {
  document.getElementById("counter").innerHTML =
    localStorage.clickcount + coffeString;
}

function counter() {
  if (typeof Storage !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("counter").innerHTML =
      localStorage.clickcount + coffeString;
  } else {
    document.getElementById("counter ").innerHTML =
      "Sorry, your browser does not support web storage...";
  }
}

function resetCounter() {
  localStorage.clickcount = 0;
  document.getElementById("counter").innerHTML =
    localStorage.clickcount + coffeString;
}
