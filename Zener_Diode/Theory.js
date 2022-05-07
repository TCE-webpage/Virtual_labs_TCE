function fetfn(){
    var x = document.getElementById("fetDrop");
    var element = document.getElementById("caret");
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
function Mosfn(){
    var x = document.getElementById("MosfetDrop");
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
function EMosfn(){
    var x = document.getElementById("EMosDrop");
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

function blackcolor(){
  document.getElementById("colorblack").style.color="black";
}