 // Table Creation Code JS
 var tabrowindex = 0;
 var xArray=[0];
 var yArray=[0];
 var i=1;
 var A=false
 var B=false
 var Vcc=false
 function table(){
  A=document.getElementById("toggle3").checked;
  B=document.getElementById("toggle3B").checked;
  var inpADisablity=document.getElementById("toggle3");
  var inpBDisablity=document.getElementById("toggle3B");
  Vcc=document.getElementById("VccToggle").checked;
  if(Vcc){
    inpADisablity.disabled=false;
    inpBDisablity.disabled=false;
    document.getElementById("instruct").innerHTML='You can see that input is OFF(logic 0) in Pin 1. So, PMOS acts as a closed switch which turns the LED ON(logic 1) in Pin 2 and NMOS acts as an open switch.Observe the Truth Table<br><b>Toggle Input switch(Pin 1)</b>'
    if(A && B){     
      document.getElementById("img1").src="simulation_gif/PowerSupplyOn.gif"; 
      setTimeout( function(){       
        document.getElementById("img1").src="simulation_gif/loop.gif";
        },2700);    
      document.getElementById("light").src="simulation_gif/lighton.png";
      document.getElementById("instruct").innerHTML='You can see that input A and B is ON(logic 1) in Pin 1 and 2. So, PMOS acts as an open switch hence the LED turns OFF(logic 0) in Pin 2.Observe the Truth Table.<br><b>Repeat the same procedure for better understanding</b>'
    }
    else if(A && !B){
      document.getElementById("img1").src="simulation_gif/INPUTON.gif"; 
      document.getElementById("light").src="simulation_gif/lightoff.png";
    }
    else if(!A && B){
      document.getElementById("img1").src="simulation_gif/INPUTON.gif"; 
      document.getElementById("light").src="simulation_gif/lightoff.png";
    }
    else{
      document.getElementById("img1").src="simulation_gif/INPUTON.gif"; 
      document.getElementById("light").src="simulation_gif/lightoff.png";
    }
    tabled();
  }
  else{
    document.getElementById("instruct").innerHTML=" Observe the IC-7404 on the left side and the internal circuit diagram of the NOT gate on the right side which is made up of NMOS and PMOS and then,<br><b>Turn on VCC</b><br>using the switch given on the pin 14."
    document.getElementById("img1").src="simulation_gif/Slide5.png";
    document.getElementById("light").src="simulation_gif/lightoff.png";
    inpADisablity.checked=false;
    inpBDisablity.checked=false;
    inpADisablity.disabled=true;
    inpBDisablity.disabled=true;
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
   output=0;
 }
 var table = document.getElementById("mytable");
 var row = table.insertRow(-1);
 var cell1 = row.insertCell(0);
 var cell2 = row.insertCell(1);
 var cell3 = row.insertCell(2);
 cell1.innerHTML = inputA;
 cell2.innerHTML = inputB; 
 cell3.innerHTML = output;
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
var toggle3B = document.getElementById('toggle3B');
toggle3B.addEventListener("click", () => document.body.classList.toggle('on') , false);
// if(typeof toggle3 !== null && toggle3 !== 'undefined' ) {
//   toggle3=document.getElementById("toggle3").innerHTML;
// }
var toggle3 = document.getElementById('toggle3');
toggle3.addEventListener("click", () => document.body.classList.toggle('on') , false);




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

function exportData(){
  /* Get the HTML data using Element by Id */
  var table = document.getElementById("mytable");

  /* Declaring array variable */
  var rows =[["Input","Output"]];

    //iterate through rows of table
  for(var i=1,row; row = table.rows[i];i++){
      //rows would be accessed using the "row" variable assigned in the for loop
      //Get each cell value/column from the row
      column1 = row.cells[0].innerText;
      column2 = row.cells[1].innerText;
  /* add a new records in the array */
      rows.push(
          [
              column1,
              column2
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
      link.setAttribute("download", "OrGateTable.csv");
      document.body.appendChild(link);
       /* download the data file named "Stock_Price_Report.csv" */
      link.click();
}


