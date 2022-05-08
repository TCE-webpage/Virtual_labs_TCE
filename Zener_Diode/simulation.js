// Formula 

var gauge2val;
function updateGauge(id, min, max){
    const newGaugeDisplayValue = document.getElementById("VZrange").value;
    const newGaugeValue =Math.floor(((newGaugeDisplayValue - min) / (max - min)) * 100);
    const vzconstval=document.getElementById("VZrange").value;
    document.getElementById(id).style.setProperty('--gauge-value', newGaugeValue);
    document.getElementById("Label").innerHTML=newGaugeDisplayValue;
//Formula for IZ
    
    gauge2val=2*vzconstval;
    const newGauge2Value =Math.floor(gauge2val * 100);
    document.getElementById("demoGauge1").style.setProperty('--gauge-value', newGauge2Value);
    document.getElementById("Label1").innerHTML=gauge2val;

  // GIF For VBE from 0.6 to 0.7

  //  if(vbeconstval>=0.600 && vbeconstval<=0.610 && vceconstval==0)
  // {
  //   document.getElementById("img").src="simulation_gif/Initial-Flow-of-electron.gif";
  
  // }
  // else if(vbeconstval>0.610 && vbeconstval<=0.630)
  // {
  //   document.getElementById("img").src="simulation_gif/Slow.gif";
  // }
  // else if(vbeconstval>0.630 && vbeconstval<=0.650)
  // {
  //   document.getElementById("img").src="simulation_gif/medium2.5.gif";
  // }
  // else if(vbeconstval>0.650 && vbeconstval<=0.670)
  // {
  //   document.getElementById("img").src="simulation_gif/Medium1.5.gif";
  // }
  // else if(vbeconstval>0.670 && vbeconstval<=0.700)
  // {
  //   document.getElementById("img").src="simulation_gif/Fast0.gif";
  // }
}

// GIF for VCE when VBE=0
function displayfn(){
  document.getElementById("start").style.display="none";  
  document.getElementById("FormNPN").style.display="inline";
  document.getElementById("instruct").innerHTML="Click Form NPN";
}
function displayfn1(){
  document.getElementById("FormNPN").style.display="none";  
  document.getElementById("instruct").innerHTML="Emitter is the region to the left end which supply free charge carriers i.e electrons. It is a heavily doped region."    
  document.getElementById("img").src="simulation_gif/1)FormNPN.gif";
  setTimeout( function() {
    document.getElementById("SetVCE").innerHTML="BASE";
    document.getElementById("SetVCE").style.boxShadow=' ';
    document.getElementById("instruct").innerHTML="It is the center region. The majority carriers from the emitter region are injected into this region. This region is very thin and lightly doped.";
   },6200);   
  setTimeout( function() {
    document.getElementById("SetVCE").innerHTML="COLLECTOR";
  document.getElementById("instruct").innerHTML="It is the region to right end where charge carriers are collected. It is also heavily doped but slightly lesser than that of the emitter. The region-area of the collector is slightly more than that of the emitter.";
   },13400); 
   setTimeout( function() {
    document.getElementById("SetVCE").innerHTML="DIFFUSION";
  document.getElementById("instruct").innerHTML="During diffusion process, Depletion region at emitter and collector junction penetrate less in heavily doped emitter and collector and extends more in the base region. As collector is slightly less doped than the emitter, the depletion layer width at the collector junction is more than the depletion layer width at the emitter junction.";
   },24400); 
  setTimeout( function() {
    document.getElementById("SetVCE").innerHTML="SET VCE";
    document.getElementById("SetVCE").disabled=false;
  document.getElementById("instruct").innerHTML="Set VCE as a constant by varying the slider. Once it's set. Click vary VBE";
},36000);           
  document.getElementById("SetVCE").style.display="inline";       
}
function displayfn2(){  
  document.getElementById("SetVCE").style.display="none";
  document.getElementById("VaryVBE").style.display="inline";          
  document.getElementById("gaugeValue-demoGauge").style.display="none";
  document.getElementById("VCErange").style.display="inline";
  document.getElementsByClassName("HoriSlider")[0].style.display="inline";
  document.getElementsByClassName("VBEName")[0].innerHTML=" ";
}
function displayfn3(){
  document.getElementById("VaryVBE").style.display="none";
  document.getElementById("end").style.display="inline";
  document.getElementById("VCErange").style.display="none";
  document.getElementsByClassName("HoriSlider")[0].style.display="none";
  document.getElementById("verti").style.display="inline";  
  document.getElementsByClassName("VBEName")[0].innerHTML="VBE";
  document.getElementById("gaugeValue-demoGauge").style.display="inline";
  document.getElementById("instruct").innerHTML="Vary VBE  using the slider given, add the corresponding Base current value to the Table.Once a set of readings are taken Set another VCE And repeat the same procedure"
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
 var vz = document.getElementById("VZrange").value;
 var iz = gauge2val;
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
   document.getElementById("end").style.display="inline";
   document.getElementById("VCErange").style.display="inline";
   document.getElementsByClassName("VBEName")[0].innerHTML="VBE";
   document.getElementById("gaugeValue-demoGauge").style.display="inline";
   document.getElementsByClassName("HoriSlider")[0].style.display="inline";
   document.getElementById("gaugeValue-demoGauge").value=0;
   document.getElementById("img").src="simulation_gif/pic2.png";
   while(tabrowindex){
   document.getElementById("mytable").deleteRow(-1);
   tabrowindex--;
   }
   document.getElementById("tbvce1").innerHTML = " ";       
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
    xaxis: {range: [0, 0.9], title: "Zener Voltage (V)"},
    yaxis: {range: [0, 150], title: "Zener Current (&#956;A)"},  
    title: "Reverse Characteristics - VZ Vs IZ"
   };

    // Display using Plotly
      // Plotly.newPlot("myPlot", data, layout);
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
xaxis: {range: [0, 40], title: "Zener Voltage (V)"},
yaxis: {range: [0,80], title: "Zener Current (&#956;A)"},  
title: "Reverse Characteristics - VZ Vs IZ"
};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);
}


