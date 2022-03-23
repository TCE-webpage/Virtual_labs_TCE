 // Table Creation Code JS
 var tabrowindex = 0;
 var xArray=[0];
 var yArray=[0];
 var i=1;
 var A=false
 var Vcc=false
 function table(){
  A=document.getElementById("toggle3").checked;
  var inpDisablity=document.getElementById("toggle3");
  Vcc=document.getElementById("VccToggle").checked;
  if(Vcc){
    inpDisablity.disabled=false;
    if(A){
      document.getElementById("img1").src="simulation_gif/INPUTON.gif";
      document.getElementById("light").src="images/off.png";
      console.log(A,Vcc);
    }
    else{
      document.getElementById("img1").src="simulation_gif/PowerSupplyOn.gif";
      document.getElementById("light").src="images/on.jpg";
      console.log(A,Vcc);

    }
    tabled();
  }
  else{
    document.getElementById("img1").src="simulation_gif/Slide5.png";
    document.getElementById("light").src="images/off.png";
    inpDisablity.checked=false;
    inpDisablity.disabled=true;
  }
  
  

 }
 function tabled(){
//  var vce = document.getElementById("toggle3").value;
//  document.getElementById("tbvce1").innerHTML =" V";

 var sno = ++tabrowindex;
 var input = 0;
 var output=1
 if(A){
   input=1;
   output=0;
 }
 var table = document.getElementById("mytable");
 var row = table.insertRow(-1);
 if (i <= 2){
 var cell1 = row.insertCell(0);
 var cell2 = row.insertCell(1);
 cell1.innerHTML = input;
 cell2.innerHTML = output; 
 xArray[i]=input;
 yArray[i]=output;
 i+=1;    
}
 }
function deleted(){
 if(tabrowindex!=0){
 document.getElementById("mytable").deleteRow(-1);
 sno = --tabrowindex;
 i--;
 }
}

//input toggler switch
var toggle3 = document.getElementById('toggle3');
// if(typeof toggle3 !== null && toggle3 !== 'undefined' ) {
//   toggle3=document.getElementById("toggle3").innerHTML;
// }
var toggle3 = document.getElementById('toggle3');
toggle3.addEventListener("click", () => document.body.classList.toggle('on') , false);
