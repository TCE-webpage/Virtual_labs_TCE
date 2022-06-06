 // Table Creation Code JS
 var tabrowindex = 0;
 var i=1;
 var A=false
 var B=false
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
  var inpADisablity=document.getElementById("toggle3");
  var inpBDisablity=document.getElementById("toggle3B");
  var VccSwitch=document.getElementById("VccToggle");
  Vcc=document.getElementById("VccToggle").checked;
  if(Vcc){
    inpADisablity.disabled=false;
    inpBDisablity.disabled=false;

    document.getElementById("instruct").innerHTML='<b>Toggle Input switches</b><br> Observe the working of half-adder and truth table for different input combinations'
    if(A && B){           
      document.getElementById("img").src="simulation_gif/AB_ON.PNG";               
      // document.getElementById("light").src="simulation_gif/lighton.png";
      document.getElementById("instruct").innerHTML='<b>Toggle Input switches</b><br> Observe the working of half-adder and truth table for different input combinations'
    }
    else if(A && !B){
      document.getElementById("img").src="simulation_gif/A_ON.PNG"; 
      // document.getElementById("light").src="simulation_gif/lightoff.png";
    }
    else if(!A && B){
      document.getElementById("img").src="simulation_gif/B_ON.PNG"; 
      // document.getElementById("light").src="simulation_gif/lightoff.png";
    }
    else{
      document.getElementById("img").src="simulation_gif/AB_Off.PNG"; 
      // document.getElementById("light").src="simulation_gif/lightoff.png";
    }
    tabled();
  }
  else{
    document.getElementById("instruct").innerHTML=" Observe the Ic chip diagram of half adder and its switchboard on the left side and the half adder logic diagram on the right side and then.<br><b>Turn On VCC </b>"
    // document.getElementById("light").src="simulation_gif/lightoff.png";
    document.getElementById("img").src="simulation_gif/half_adder.png"; 
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
 var sum=0;
 var carry=0;
 if(A && B){
   inputA=1;
   inputB=1;
   sum=0;
   carry=1;
 }
 else if(A && !B){
   inputA=1;
   inputB=0;
   sum=1;
   carry=0;
 }
 else if(!A && B){
  inputA=0;
  inputB=1;
  sum=1;
  carry=0;
 }
 else{
   inputA=0;
   inputB=0;
   sum=0;
   carry=0;
 }
 var table = document.getElementById("mytable");
 var row = table.insertRow(-1);
 var cell1 = row.insertCell(0);
 var cell2 = row.insertCell(1);
 var cell3 = row.insertCell(2);
 var cell4 = row.insertCell(3);
 cell1.innerHTML = inputA;
 cell2.innerHTML = inputB; 
 cell3.innerHTML = sum;
 cell4.innerHTML = carry;

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
  var rows =[["Half adder"]];

    //iterate through rows of table
  for(var i=1,row; row = table.rows[i];i++){
      //rows would be accessed using the "row" variable assigned in the for loop
      //Get each cell value/column from the row
      column1 = row.cells[0].innerText;
      column2 = row.cells[1].innerText;
      column3 = row.cells[2].innerText;
      column4 = row.cells[3].innerText;
  /* add a new records in the array */
      rows.push(
          [
              column1,
              column2,
              column3,
              column4
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
      link.setAttribute("download", "HalfAdder.csv");
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