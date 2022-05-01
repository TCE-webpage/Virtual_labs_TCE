 // Table Creation Code JS
 var tabrowindex = 0;
 var i=1;
 var A=false
 var Vcc=false
 function pin(){
  var VccPin=document.getElementById("VccToggle");
  var inputPin=document.getElementById("inputPin").value;
  var outPin=document.getElementById("outputPin");
  var icImg= document.getElementById("img");
  console.log(inputPin);
  if(inputPin=="0"){
    console.log("yes")
    VccPin.disabled=true;
    icImg.src="simulation_gif/OR_IC.png";
  }
  else{
    VccPin.disabled=false;
  }
  document.getElementById("instruct").innerHTML='Observe the IC-7404 diagram,you can see that the gate for the selected input pin is highlighted.<br> <b>Turn On Vcc</b>'

  if(inputPin=="1"){
    outPin.value="2";
    icImg.src="simulation_gif/NOT_IN_1.jpg";
    
  }
  else if(inputPin=="3"){
    outPin.value="4";
    icImg.src="simulation_gif/NOT_IN_3.jpg";
  }
  else if(inputPin=="5"){
    outPin.value="6";
    icImg.src="simulation_gif/NOT_IN_5.jpg";
  }
  else if(inputPin=="9"){
    outPin.value="8";
    icImg.src="simulation_gif/NOT_IN_9.jpg";
  }
  else if(inputPin=="11"){
    outPin.value="10";
    icImg.src="simulation_gif/NOT_IN_11.jpg";
  }
  else if(inputPin=="13"){
    outPin.value="12";
    icImg.src="simulation_gif/NOT_IN_13.jpg";
  }
}
 function table(){
  A=document.getElementById("toggle3").checked;
  var inpDisablity=document.getElementById("toggle3");
  Vcc=document.getElementById("VccToggle").checked;
  var vccSwitch=document.getElementById("VccToggle");
  if(Vcc){
    inpDisablity.disabled=false;
    document.getElementById("instruct").innerHTML='<b>Toggle Input switches</b><br> Observe the working of gate and truth table for different input combinations'
    if(A){      
      
      document.getElementById("img1").src="simulation_gif/INPUTON.gif";               
      document.getElementById("light").src="simulation_gif/lightoff.png";
      console.log(A,Vcc);
      document.getElementById("instruct").innerHTML='<b>Toggle Input switches</b><br> Observe the working of gate and truth table for different input combinations'
    }
    else{
      vccSwitch.disabled=true;
      inpDisablity.disabled=true;
      document.getElementById("img1").src="simulation_gif/PowerSupplyOn.gif";
      setTimeout( function(){       
        document.getElementById("img1").src="simulation_gif/loop.gif";
        vccSwitch.disabled=false;
        inpDisablity.disabled=false;
        },2700);
      document.getElementById("light").src="simulation_gif/lighton.png";
      console.log(A,Vcc);
    }
    tabled();
  }
  else{
  document.getElementById("instruct").innerHTML='Observe the IC-7404 diagram,you can see that the gate for the selected input pin is highlighted.<br> <b>Turn On Vcc</b>'

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
      link.setAttribute("download", "NOt_Gate_Truth_Table.csv");
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