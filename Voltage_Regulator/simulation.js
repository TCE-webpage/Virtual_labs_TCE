// Formula 

var gauge2val;
var vzconstval;
var newGaugeDisplayValue;
function updateGauge(id, min, max){
    newGaugeDisplayValue = document.getElementById("VZrange").value;
    const newGaugeValue =Math.floor(((newGaugeDisplayValue - min) / (max - min)) * 100);
    document.getElementById(id).style.setProperty('--gauge-value', newGaugeValue);
    document.getElementById("demoGauge1").style.setProperty('--gauge-value', newGaugeValue);
    document.getElementById("Vinlabel").innerHTML=newGaugeDisplayValue;


    if( newGaugeDisplayValue<5.1)
    {
    gauge2val=newGaugeDisplayValue;
    vzconstval = 0;
    document.getElementById("Label").innerHTML= 0;
    var x= newGaugeDisplayValue-(0.3*newGaugeDisplayValue);
    document.getElementById("Label1").innerHTML=x.toFixed(2);
    }
    else{
      gauge2val=5.1;
      vzconstval=5.1;
    document.getElementById("Label").innerHTML= 5.1;
    document.getElementById("Label1").innerHTML= 5.1;  
    }
    
    
    

  // GIF For VBE from 0.6 to 0.7

   if(newGaugeDisplayValue>0 && newGaugeDisplayValue<=1)
  {
    document.getElementById("img").src="simulation_gif/Intro_VR.gif";
  
  }
  else if(newGaugeDisplayValue>1 && newGaugeDisplayValue<=5.1)
  {
    document.getElementById("img").src="simulation_gif/Currentflow.gif";
  }
  else if(newGaugeDisplayValue>5.1 && newGaugeDisplayValue<15)
  {
    document.getElementById("img").src="simulation_gif/ZenerCurrent.gif";
  }
}

// GIF for VCE when VBE=0
function displayfn(){
  document.getElementById("start").style.display="none";  
  document.getElementById("VaryVin").style.display="inline";
  document.getElementById("VZrange").style.display="inline";
  document.getElementById("verti").style.display="inline"; 
  document.getElementById("VinName").style.display="inline"; 
  document.getElementById("instruct").innerHTML="Vary V<sub>in</sub> using the slider given and observe the corresponding Zener voltage and output voltage in the respective voltmeters and add the same to table and plot the graph.";
}
function displayfn3(){
  document.getElementById("VaryVin").style.display="none";
  document.getElementById("end").style.display="inline"; 
  document.getElementById("instruct").innerHTML="Repeat the experiment for 'n' number of times to get better understanding"
}
 // Table Creation Code JS
 var tabrowindex = 0;
 var xArray=[0];
 var yArray=[0];
 var i=1;
 function tabled(){
//  var vce = document.getElementById("VCErange").value;
//  document.getElementById("tbvce1").innerHTML = vce+" V";

 var sno = ++tabrowindex;
 var vz = newGaugeDisplayValue;
 if (vz<5.1){
  var vo = newGaugeDisplayValue-(0.3*newGaugeDisplayValue);
  var iz = vo.toFixed(2);
 }
 else{ var iz = gauge2val;}
 var table = document.getElementById("mytable");
 var row = table.insertRow(-1);
 var cell1 = row.insertCell(0);
 var cell2 = row.insertCell(1);
 var cell3 = row.insertCell(2);
 cell1.innerHTML = sno;
 cell2.innerHTML = vz;
 cell3.innerHTML = iz;   
 xArray[i]=vz;
 yArray[i]=iz;
 i+=1;    
}
function deleted(){
 if(tabrowindex!=0){
 document.getElementById("mytable").deleteRow(-1);
 sno = --tabrowindex;
 i--;
 }
}
function displayfn4(){
  document.getElementById("img").src="simulation_gif/intro.png";
  document.getElementById("end").style.display="inline";
   document.getElementById("VZrange").value = 0;
   updateGauge('demoGauge', 0, 10);
   while(tabrowindex){
   document.getElementById("mytable").deleteRow(-1);
   tabrowindex--;
   }     
    xArray=[0];
    yArray=[0];
    i=1; 
    
    // Define Data
   var data = [{
    x: xArray,
    y: yArray,
    mode:"lines"
    }];

    // Define Layout
    var layout = {
    xaxis: {range: [0, 15], title: "Input Voltage (V)"},
    yaxis: {range: [0, 10], title: "Output Voltage (V)"},  
    title: "Line Regulation - Vin Vs Vout"
   };

    // Display using Plotly
      Plotly.newPlot("myPlot", data, layout);
 }
function plotgraph(){
// Define Data
  var data = [{
    x: xArray,
    y: yArray,
    mode:"lines"
    }];

// Define Layout
var layout = {
xaxis: {range: [0, 15], title: "Input Voltage (V)"},
yaxis: {range: [0,10], title: "Output Voltage (V)"},  
title: "Voltage Regulation - Vin Vs Vout"
};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);
}

//csv download
function exportData(){
  /* Get the HTML data using Element by Id */
  var table = document.getElementById("mytable");

  /* Declaring array variable */
  var rows =[["S.no","Input Voltage (V)","Output Voltage (V)"]];

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
      link.setAttribute("download", "voltage_regulator.csv");
      document.body.appendChild(link);
       /* download the data file named "Stock_Price_Report.csv" */
      link.click();
}

