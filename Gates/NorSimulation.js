 // Table Creation Code JS
 var tabrowindex = 0;
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
    icImg.src="simulation_gif/NOR_IC.png";
  }
  else{
    VccPin.disabled=false;
  }
  document.getElementById("instruct").innerHTML='Observe the IC-7402 diagram,you can see that the gate for the selected input pin is highlighted.<br> <b>Turn On Vcc</b>'


  if(inputPin=="3"){
    inputpinB.value="2";
    outPin.value="1";
    icImg.src="simulation_gif/NOR_IN_1.png";
    
  }
  else if(inputPin=="6"){
    inputpinB.value="5";
    outPin.value="4";
    icImg.src="simulation_gif/NOR_IN_4.png";
  }
  else if(inputPin=="8"){
    inputpinB.value="9";
    outPin.value="10";
    icImg.src="simulation_gif/NOR_IN_9.png";
  }
  else if(inputPin=="11"){
    inputpinB.value="12";
    outPin.value="13"
    icImg.src="simulation_gif/NOR_IN_12.png";
  }
}
 function table(){
  A=document.getElementById("toggle3").checked;
  B=document.getElementById("toggle3B").checked;
  var inpADisablity=document.getElementById("toggle3");
  var inpBDisablity=document.getElementById("toggle3B");
  var inpVccPinDisablity=document.getElementById("inputPin");
  Vcc=document.getElementById("VccToggle").checked;
  var vccSwitch=document.getElementById("VccToggle");
  if(Vcc){
    inpADisablity.disabled=false;
    inpBDisablity.disabled=false;
    inpVccPinDisablity.disabled=true;
    document.getElementById("instruct").innerHTML='<b>Toggle Input switches</b><br> Observe the working of gate and truth table for different input combinations'
    if(A && B){           
      document.getElementById("img1").src="simulation_gif/Nor_A_B_On.gif"; 
      document.getElementById("light").src="simulation_gif/lightoff.png";
      document.getElementById("instruct").innerHTML='<b>Toggle Input switches</b><br> Observe the working of gate and truth table for different input combinations'

    }
    else if(A && !B){
      document.getElementById("img1").src="simulation_gif/Nor_A_On_B_Off.gif"; 
      document.getElementById("light").src="simulation_gif/lightoff.png";
    }
    else if(!A && B){
      document.getElementById("img1").src="simulation_gif/Nor_A_Off_B_ON.gif"; 
      document.getElementById("light").src="simulation_gif/lightoff.png";
    }
    else{
      inpADisablity.disabled=true;
      inpBDisablity.disabled=true;
      vccSwitch.disabled=true;
      document.getElementById("img1").src="simulation_gif/Nor_A_B_Off.gif"; 
      setTimeout( function(){       
        document.getElementById("img1").src="simulation_gif/Nor_A_B_Off_Loop.gif";
        inpADisablity.disabled=false;
        inpBDisablity.disabled=false;
        vccSwitch.disabled=false;
        },3800);
      document.getElementById("light").src="simulation_gif/lighton.png";
    }
    tabled();
  }
  else{
    document.getElementById("instruct").innerHTML="Observe the IC-7402 diagram,you can see that the gate for the selected input pin is highlighted. <b>Turn On Vcc</b>"
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
    inpVccPinDisablity.disabled=false;
    document.getElementById("img1").src="simulation_gif/NorIntro.JPG";

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
   output=0;
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
   output=1;
 }
 var table = document.getElementById("mytable");
 var row = table.insertRow(-1);
 var cell1 = row.insertCell(0);
 var cell2 = row.insertCell(1);
 var cell3 = row.insertCell(2);
 cell1.innerHTML = inputA;
 cell2.innerHTML = inputB; 
 cell3.innerHTML = output;
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
// if(typeof toggle3 !== null && toggle3 !== 'undefined' ) {
//   toggle3=document.getElementById("toggle3").innerHTML;
// }
var toggle3 = document.getElementById('toggle3');
toggle3.addEventListener("click", () => document.body.classList.toggle('on') , false);

function exportData(){
  /* Get the HTML data using Element by Id */
  var table = document.getElementById("mytable");

  /* Declaring array variable */
  var rows =[["Input A","Input B","Output"]];

    //iterate through rows of table
  for(var i=1,row; row = table.rows[i];i++){
      //rows would be accessed using the "row" variable assigned in the for loop
      //Get each cell value/column from the row
      column1 = row.cells[0].innerText;
      column2 = row.cells[1].innerText;
      column3 = row.cells[2].innerText;
  /* add a new records in the array */
      rows.push(
          [
              column1,
              column2,
              column3
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
      link.setAttribute("download", "NOR_Gate_Truth_Table.csv");
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