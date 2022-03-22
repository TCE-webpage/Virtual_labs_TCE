function notfn(){
    var x = document.getElementById("notDrop");
    var element = document.getElementById("caret1");
    if (element.classList.contains("fa-caret-right")) {
      element.classList.remove("fa-caret-right");
      element.classList.add("fa-caret-down");
    }
    else{
      element.classList.add("fa-caret-right");
      element.classList.remove("fa-caret-down");
    }
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}
function andfn(){
    var x = document.getElementById("andDrop");
    var element = document.getElementById("caret2");
    if (element.classList.contains("fa-caret-right")) {
      element.classList.remove("fa-caret-right");
      element.classList.add("fa-caret-down");
    }
    else{
      element.classList.add("fa-caret-right");
      element.classList.remove("fa-caret-down");
    }
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
}
function orfn(){
    var x = document.getElementById("orDrop");
    var element = document.getElementById("caret3");
    if (element.classList.contains("fa-caret-right")) {
      element.classList.remove("fa-caret-right");
      element.classList.add("fa-caret-down");
    }
    else{
      element.classList.add("fa-caret-right");
      element.classList.remove("fa-caret-down");
    }
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
}
function nandfn(){
    var x = document.getElementById("nandDrop");
    var element = document.getElementById("caret4");
    if (element.classList.contains("fa-caret-right")) {
      element.classList.remove("fa-caret-right");
      element.classList.add("fa-caret-down");
    }
    else{
      element.classList.add("fa-caret-right");
      element.classList.remove("fa-caret-down");
    }
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
}
function norfn(){
    var x = document.getElementById("norDrop");
    var element = document.getElementById("caret5");
    if (element.classList.contains("fa-caret-right")) {
      element.classList.remove("fa-caret-right");
      element.classList.add("fa-caret-down");
    }
    else{
      element.classList.add("fa-caret-right");
      element.classList.remove("fa-caret-down");
    }
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
}
function xorfn(){
    var x = document.getElementById("xorDrop");
    var element = document.getElementById("caret6");
    if (element.classList.contains("fa-caret-right")) {
      element.classList.remove("fa-caret-right");
      element.classList.add("fa-caret-down");
    }
    else{
      element.classList.add("fa-caret-right");
      element.classList.remove("fa-caret-down");
    }
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
}
function xnorfn(){
    var x = document.getElementById("xnorDrop");
    var element = document.getElementById("caret7");
    if (element.classList.contains("fa-caret-right")) {
      element.classList.remove("fa-caret-right");
      element.classList.add("fa-caret-down");
    }
    else{
      element.classList.add("fa-caret-right");
      element.classList.remove("fa-caret-down");
    }
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
}