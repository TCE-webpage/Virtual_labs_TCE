 // Table Creation Code JS
 var tabrowindex = 0;
 var i=1;
 var A=false
 var B=false
 var C=false;
 var Vcc=false

//  function pin(){
//   var VccPin=document.getElementById("VccToggle");
//   var inputPin=document.getElementById("inputPin").value;
//   var icImg= document.getElementById("img");
//   if(inputPin=="0"){
//     VccPin.disabled=false;
//     icImg.src="simulation_gif/AND_IC.png";
//   }
//   else{
//     VccPin.disabled=false;
//   }
//   document.getElementById("instruct").innerHTML='Observe the IC-7408 diagram,you can see that the gate for the selected input pin is highlighted.<br> <b>Turn On Vcc</b>'

//   if(inputPin=="1"){
//     inputpinB.value="2";
//     outPin.value="3";
//     icImg.src="simulation_gif/AND_IN_1.png";
    
//   }
//   else if(inputPin=="4"){
//     inputpinB.value="5";
//     outPin.value="6";
//     icImg.src="simulation_gif/AND_IN_4.png";
//   }
//   else if(inputPin=="10"){
//     inputpinB.value="9";
//     outPin.value="8";
//     icImg.src="simulation_gif/AND_IN_9.png";
//   }
//   else if(inputPin=="13"){
//     inputpinB.value="12";
//     outPin.value="11"
//     icImg.src="simulation_gif/AND_IN_12.png";
//   }
// }
 function table(){
  A=document.getElementById("toggle3").checked;
  B=document.getElementById("toggle3B").checked;
  C=document.getElementById("toggle3C").checked;
  var inpADisablity=document.getElementById("toggle3");
  var inpBDisablity=document.getElementById("toggle3B");
  var inpCDisablity=document.getElementById("toggle3C");
  var VccSwitch=document.getElementById("VccToggle");
  Vcc=document.getElementById("VccToggle").checked;
  if(Vcc){
    inpADisablity.disabled=false;
    inpBDisablity.disabled=false;
    inpCDisablity.disabled=false;

    document.getElementById("instruct").innerHTML='<b>Toggle Input switches</b><br> Observe the working of full-adder and truth table for different input combinations'
    if(A && B && C){           
      document.getElementById("img").src="simulation_gif/ABCON.png";               
      // document.getElementById("light").src="simulation_gif/lighton.png";
      document.getElementById("instruct").innerHTML='<b>Toggle Input switches</b><br> Observe the working of full-adder and truth table for different input combinations'
    }
    else if(!A && !B && !C){
      document.getElementById("img").src="simulation_gif/ABCOff.png"; 
      // document.getElementById("light").src="simulation_gif/lightoff.png";
    }
    else if(!A && !B && C){
      document.getElementById("img").src="simulation_gif/C_ON.png"; 
      // document.getElementById("light").src="simulation_gif/lightoff.png";
    }
    else if(!A && B && !C){
      document.getElementById("img").src="simulation_gif/BON.png"; 
      // document.getElementById("light").src="simulation_gif/lightoff.png";
    }
    else if(!A && B && C){
      document.getElementById("img").src="simulation_gif/BCON.png"; 
      // document.getElementById("light").src="simulation_gif/lightoff.png";
    }
    else if(A && !B && !C){
      document.getElementById("img").src="simulation_gif/AON.png"; 
      // document.getElementById("light").src="simulation_gif/lightoff.png";
    }
    else if(A && !B && C){
      document.getElementById("img").src="simulation_gif/ACON.png"; 
      // document.getElementById("light").src="simulation_gif/lightoff.png";
    }
    else if(A && B && !C){
      document.getElementById("img").src="simulation_gif/ABON.png"; 
      // document.getElementById("light").src="simulation_gif/lightoff.png";
    }
    tabled();
  }
  else{
    document.getElementById("instruct").innerHTML=" Observe the Ic chip diagram of half adder and its switchboard on the left side and the half adder logic diagram on the right side and then.<br><b>Turn On VCC </b>"
    document.getElementById("img").src="simulation_gif/Full_Adder.png";
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
    if(inpCDisablity.checked){
      inpCDisablity.click();
    }
    else{
      inpCDisablity.checked=false;
    }
    inpADisablity.disabled=true;
    inpBDisablity.disabled=true;
    inpCDisablity.disabled=true;

    // document.getElementById("img1").src="simulation_gif/AndIntro.JPG";

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
 var carryIn=0;
 var sum=0;
 var carryOut=0;
if(A && B && C){           
    inputA=1
    inputB=1
    carryIn=1
    carryOut=1
    sum=1  
}
else if(!A && !B && !C){
  inputA=0
  inputB=0
  carryIn=0
  carryOut=0
  sum=0
}
else if(!A && !B && C){
  inputA=0
  inputB=0
  carryIn=1
  carryOut=0
  sum=1  
}
else if(!A && B && !C){
  inputA=0
  inputB=1
  carryIn=0
  carryOut=0
  sum=1  
}
else if(!A && B && C){
  inputA=0
  inputB=1
  carryIn=1
  carryOut=1
  sum=0
}
else if(A && !B && !C){
  inputA=1
  inputB=0
  carryIn=0
  carryOut=0
  sum=1  
}
else if(A && !B && C){
  inputA=1
  inputB=0
  carryIn=1
  carryOut=1
  sum=0
}
else if(A && B && !C){
  inputA=1
  inputB=1
  carryIn=0
  carryOut=1
  sum=0
}
 var table = document.getElementById("mytable");
 var row = table.insertRow(-1);
 var cell1 = row.insertCell(0);
 var cell2 = row.insertCell(1);
 var cell3 = row.insertCell(2);
 var cell4 = row.insertCell(3);
 var cell5 = row.insertCell(4);
 cell1.innerHTML = inputA;
 cell2.innerHTML = inputB; 
 cell3.innerHTML = carryIn;
 cell4.innerHTML = sum;
 cell5.innerHTML = carryOut;

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
toggle3B.addEventListener("click", () => document.body.classList.toggle('ON') , false);
var toggle3C = document.getElementById('toggle3C');
toggle3C.addEventListener("click", () => document.body.classList.toggle('On') , false);
// if(typeof toggle3 !== null && toggle3 !== 'undefined' ) {
//   toggle3=document.getElementById("toggle3").innerHTML;
// }
var toggle3 = document.getElementById('toggle3');
toggle3.addEventListener("click", () => document.body.classList.toggle('on') , false);



function exportData(){
  /* Get the HTML data using Element by Id */
  var table = document.getElementById("mytable");

  /* Declaring array variable */
  var rows =[["Full adder"]];

    //iterate through rows of table
  for(var i=1,row; row = table.rows[i];i++){
      //rows would be accessed using the "row" variable assigned in the for loop
      //Get each cell value/column from the row
      column1 = row.cells[0].innerText;
      column2 = row.cells[1].innerText;
      column3 = row.cells[2].innerText;
      column4 = row.cells[3].innerText;
      column5 = row.cells[4].innerText;
  /* add a new records in the array */
      rows.push(
          [
              column1,
              column2,
              column3,
              column4,
              column5
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
      link.setAttribute("download", "FullAdder.csv");
      document.body.appendChild(link);
       /* download the data file named "Stock_Price_Report.csv" */
      link.click();
}

function info(){
  document.getElementById("info").style.display="block";
}
function info_close(){
  document.getElementById('info').style.display="none";
}