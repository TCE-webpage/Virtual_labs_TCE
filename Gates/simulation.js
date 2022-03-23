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
    document.getElementById("instruct").innerHTML='You can see that input is OFF(logic 0) in Pin 1. So, PMOS acts as a closed switch which turns the LED ON(logic 1) in Pin 2 and NMOS acts as an open switch.Observe the Truth Table<br><b>Toggle Input switch(Pin 1)</b>'
    if(A){      
      
      document.getElementById("img1").src="simulation_gif/INPUTON.gif";               
      document.getElementById("light").src="simulation_gif/lightoff.png";
      console.log(A,Vcc);
      document.getElementById("instruct").innerHTML='You can see that input is ON(logic 1) in Pin 1. So, PMOS acts as an open switch hence the LED turns OFF(logic 0) in Pin 2.Observe the Truth Table.<br><b>Repeat the same procedure for better understanding</b>'
    }
    else{
      
      document.getElementById("img1").src="simulation_gif/PowerSupplyOn.gif";
      setTimeout( function(){       
        document.getElementById("img1").src="simulation_gif/loop.gif";
        },2700);
      document.getElementById("light").src="simulation_gif/lighton.png";
      console.log(A,Vcc);
    }
    tabled();
  }
  else{
    document.getElementById("instruct").innerHTML=" Observe the IC-7404 on the left side and the internal circuit diagram of the NOT gate on the right side which is made up of NMOS and PMOS and then,<br><b>Turn on VCC</b><br>using the switch given on the pin 14."
    document.getElementById("img1").src="simulation_gif/Slide5.png";
    document.getElementById("light").src="simulation_gif/lightoff.png";
    inpDisablity.checked=false;
    inpDisablity.disabled=true;
    while(tabrowindex){
      document.getElementById("mytable").deleteRow(-1);
      tabrowindex--;
      }
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
 var cell1 = row.insertCell(0);
 var cell2 = row.insertCell(1);
 cell1.innerHTML = input;
 cell2.innerHTML = output; 
 xArray[i]=input;
 yArray[i]=output;
 i+=1;    
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
