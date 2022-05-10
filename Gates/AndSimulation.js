 // Table Creation Code JS
 var tabrowindex = 0;
<<<<<<< Updated upstream
 var i=1;
 var A=false
 var B=false
 var Vcc=false

 function pin(){
  var VccPin=document.getElementById("VccToggle");
  var inputPin=document.getElementById("inputPin").value;
  var inputpinB=document.getElementById("inputPinB");
  var outPin=document.getElementById("outputPin");
  var icImg= document.getElementById("img");
  if(inputPin=="0"){
    VccPin.disabled=true;
    icImg.src="simulation_gif/AND_IC.png";
  }
  else{
    VccPin.disabled=false;
  }
  document.getElementById("instruct").innerHTML='Observe the IC-7408 diagram,you can see that the gate for the selected input pin is highlighted.<br> <b>Turn On Vcc</b>'

  if(inputPin=="1"){
    inputpinB.value="2";
    outPin.value="3";
    icImg.src="simulation_gif/AND_IN_1.png";
    
  }
  else if(inputPin=="4"){
    inputpinB.value="5";
    outPin.value="6";
    icImg.src="simulation_gif/AND_IN_4.png";
  }
  else if(inputPin=="10"){
    inputpinB.value="9";
    outPin.value="8";
    icImg.src="simulation_gif/AND_IN_9.png";
  }
  else if(inputPin=="13"){
    inputpinB.value="12";
    outPin.value="11"
    icImg.src="simulation_gif/AND_IN_12.png";
  }
}
 function table(){
  A=document.getElementById("toggle3").checked;
  B=document.getElementById("toggle3B").checked;
  var inpADisablity=document.getElementById("toggle3");
  var inpBDisablity=document.getElementById("toggle3B");
  var inpPinDisablity=document.getElementById("inputPin");
  var VccSwitch=document.getElementById("VccToggle");
  Vcc=document.getElementById("VccToggle").checked;
  if(Vcc){
    inpADisablity.disabled=false;
    inpBDisablity.disabled=false;
    inpPinDisablity.disabled=true;

    document.getElementById("instruct").innerHTML='<b>Toggle Input switches</b><br> Observe the working of gate and truth table for different input combinations'
    if(A && B){           
      inpADisablity.disabled=true;
      inpBDisablity.disabled=true;
      VccSwitch.disabled=true;
      document.getElementById("img1").src="simulation_gif/And_A_B_On.gif"; 
      setTimeout( function(){  
        document.getElementById("img1").src="simulation_gif/And_A_B_On_Loop.gif";
        inpADisablity.disabled=false;
        inpBDisablity.disabled=false;
        VccSwitch.disabled=false;
        },3000); 
              
      document.getElementById("light").src="simulation_gif/lighton.png";
      document.getElementById("instruct").innerHTML='<b>Toggle Input switches</b><br> Observe the working of gate and truth table for different input combinations'
    }
    else if(A && !B){
      inpADisablity.disabled=true;
      inpBDisablity.disabled=true;
      VccSwitch.disabled=true;
      document.getElementById("img1").src="simulation_gif/And_A_On_B_Off.gif"; 
      setTimeout( function(){       
        document.getElementById("img1").src="simulation_gif/And_A_On_B_Off_Loop.gif";
        inpADisablity.disabled=false;
        inpBDisablity.disabled=false;
        VccSwitch.disabled=false;
        },3500);
      document.getElementById("light").src="simulation_gif/lightoff.png";
    }
    else if(!A && B){
      inpADisablity.disabled=true;
      inpBDisablity.disabled=true;
      VccSwitch.disabled=true;
      document.getElementById("img1").src="simulation_gif/And_A_Off_B_ON.gif"; 
      setTimeout( function(){       
        document.getElementById("img1").src="simulation_gif/And_A_Off_B_ON_Loop.gif";
        inpADisablity.disabled=false;
        inpBDisablity.disabled=false;
        VccSwitch.disabled=false;
        },4400);
      document.getElementById("light").src="simulation_gif/lightoff.png";
    }
    else{
      inpADisablity.disabled=true;
      inpBDisablity.disabled=true;
      VccSwitch.disabled=true;
      document.getElementById("img1").src="simulation_gif/And_A_B_Off.gif"; 
      setTimeout( function(){       
        document.getElementById("img1").src="simulation_gif/And_A_B_Off_Loop.gif";
        inpADisablity.disabled=false;
        inpBDisablity.disabled=false;
        VccSwitch.disabled=false;
        },3800);
      document.getElementById("light").src="simulation_gif/lightoff.png";
=======
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
>>>>>>> Stashed changes
    }
    tabled();
  }
  else{
<<<<<<< Updated upstream
    document.getElementById("instruct").innerHTML="Observe the IC-7408 diagram,you can see that the gate for the selected input pin is highlighted. <b>Turn On Vcc</b>"
    document.getElementById("light").src="simulation_gif/lightoff.png";
    document.getElementById("VccToggle").disabled=true;
    if(inpADisablity.checked){
      inpADisablity.click();
    }
    else{
      inpADisablity.checked=false;
    }
    if(inpBDisablity.checked){
      inpBDisablity.click();
    }
    else{
      inpBDisablity.checked=false;
    }
    inpADisablity.disabled=true;
    inpBDisablity.disabled=true;
    inpPinDisablity.disabled=false;
    document.getElementById("img1").src="simulation_gif/AndIntro.JPG";

=======
    document.getElementById("instruct").innerHTML=" Observe the IC-7404 on the left side and the internal circuit diagram of the NOT gate on the right side which is made up of NMOS and PMOS and then,<br><b>Turn on VCC</b><br>using the switch given on the pin 14."
    document.getElementById("img1").src="simulation_gif/Slide5.png";
    document.getElementById("light").src="simulation_gif/lightoff.png";
    inpDisablity.checked=false;
    inpDisablity.disabled=true;
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
 var inputA = 0;
 var inputB = 0;
 var output=1
 if(A && B){
   inputA=1;
   inputB=1;
   output=1;
 }
 else if(A && !B){
   inputA=1;
   inputB=0;
   output=0; 
 }
 else if(!A && B){
  inputA=0;
  inputB=1;
  output=0; 
 }
 else{
   inputA=0;
   inputB=0;
=======
 var input = 0;
 var output=1
 if(A){
   input=1;
>>>>>>> Stashed changes
   output=0;
 }
 var table = document.getElementById("mytable");
 var row = table.insertRow(-1);
 var cell1 = row.insertCell(0);
 var cell2 = row.insertCell(1);
<<<<<<< Updated upstream
 var cell3 = row.insertCell(2);
 cell1.innerHTML = inputA;
 cell2.innerHTML = inputB; 
 cell3.innerHTML = output;
=======
 cell1.innerHTML = input;
 cell2.innerHTML = output; 
 xArray[i]=input;
 yArray[i]=output;
>>>>>>> Stashed changes
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
var toggle3B = document.getElementById('toggle3B');
<<<<<<< Updated upstream
toggle3B.addEventListener("click", () => document.body.classList.toggle('ON') , false);
=======
toggle3B.addEventListener("click", () => document.body.classList.toggle('on') , false);
>>>>>>> Stashed changes
// if(typeof toggle3 !== null && toggle3 !== 'undefined' ) {
//   toggle3=document.getElementById("toggle3").innerHTML;
// }
var toggle3 = document.getElementById('toggle3');
toggle3.addEventListener("click", () => document.body.classList.toggle('on') , false);



<<<<<<< Updated upstream
=======

function plotgraph(){
// Define Data
var data = [{
  x: xArray,
  y: yArray,
  mode:"lines"
  }];

// Define Layout
var layout = {
xaxis: {range: [0, 5], title: "Drain-Source Voltage (V)"},
yaxis: {range: [0, 5], title: "Drain Current (A)"},  
title: "Drain Characteristics - VDS Vs ID"
};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);
}

>>>>>>> Stashed changes
function exportData(){
  /* Get the HTML data using Element by Id */
  var table = document.getElementById("mytable");

  /* Declaring array variable */
<<<<<<< Updated upstream
  var rows =[["Input A","Input B","Output"]];
=======
  var rows =[["Input","Output"]];
>>>>>>> Stashed changes

    //iterate through rows of table
  for(var i=1,row; row = table.rows[i];i++){
      //rows would be accessed using the "row" variable assigned in the for loop
      //Get each cell value/column from the row
      column1 = row.cells[0].innerText;
      column2 = row.cells[1].innerText;
<<<<<<< Updated upstream
      column3 = row.cells[2].innerText;
=======
>>>>>>> Stashed changes
  /* add a new records in the array */
      rows.push(
          [
              column1,
<<<<<<< Updated upstream
              column2,
              column3
=======
              column2
>>>>>>> Stashed changes
          ]
      );

      }
      csvContent = "data:text/csv;charset=utf-8,";
       /* add the column delimiter as comma(,) and each row splitted by new line character (\n) */
      rows.forEach(function(rowArray){
          row = rowArray.join(",");
          csvContent += row + "\r\n";
      });

      /* create a hidden <a> DOM node and set its download attribute */
      var encodedUri = encodeURI(csvContent);
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
<<<<<<< Updated upstream
      link.setAttribute("download", "AND_Gate_Truth_Table.csv");
=======
      link.setAttribute("download", "OrGateTable.csv");
>>>>>>> Stashed changes
      document.body.appendChild(link);
       /* download the data file named "Stock_Price_Report.csv" */
      link.click();
}

<<<<<<< Updated upstream
function info(){
  document.getElementById("info").style.display="block";
}
function info_close(){
  document.getElementById('info').style.display="none";
}
=======

>>>>>>> Stashed changes
