// Button Display Function
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
      document.getElementById("SetVBE").innerHTML="BASE";
      document.getElementById("SetVBE").style.boxShadow=' ';
      document.getElementById("instruct").innerHTML="It is the center region. The majority carriers from the emitter region are injected into this region. This region is very thin and lightly doped.";
     },6200);   
    setTimeout( function() {
      document.getElementById("SetVBE").innerHTML="COLLECTOR";
    document.getElementById("instruct").innerHTML="It is the region to right end where charge carriers are collected. It is also heavily doped but slightly lesser than that of the emitter. The region-area of the collector is slightly more than that of the emitter.";
     },13400); 
     setTimeout( function() {
      document.getElementById("SetVBE").innerHTML="DIFFUSION";
    document.getElementById("instruct").innerHTML="During diffusion process, Depletion region at emitter and collector junction penetrate less in heavily doped emitter and collector and extends more in the base region. As collector is slightly less doped than the emitter, the depletion layer width at the collector junction is more than the depletion layer width at the emitter junction.";
     },24400); 
    setTimeout( function() {
      document.getElementById("SetVBE").innerHTML="SET IB";
      document.getElementById("SetVBE").disabled=false;
    document.getElementById("instruct").innerHTML="Set IB as a constant by varying the VBE slider. Once it's set. Click vary VCE";
  },36000);           
    document.getElementById("SetVBE").style.display="inline";       
  }
  function displayfn2(){  
    document.getElementById("SetVBE").style.display="none";
    document.getElementById("VaryVCE").style.display="inline";          
    document.getElementById("VCErange").style.display="none";
    document.getElementsByClassName("HoriSlider")[0].style.display="none";
    document.getElementById("verti").style.display="inline";  
    document.getElementsByClassName("VBEName")[0].innerHTML="VBE";
    document.getElementById("gaugeValue-demoGauge").style.display="inline";
  }
  function displayfn3(){
    document.getElementById("VaryVCE").style.display="none";
    document.getElementById("end").style.display="inline";
    document.getElementById("gaugeValue-demoGauge").style.display="none";
    document.getElementById("VCErange").style.display="inline";
    document.getElementsByClassName("HoriSlider")[0].style.display="inline";
    document.getElementsByClassName("VBEName")[0].innerHTML=" ";
    document.getElementById("instruct").innerHTML="Vary VCE  using the slider given, add the corresponding Collector current value to the Table.Once a set of readings are taken Set another IB And repeat the same procedure"
  }
  
// Formula for IB display
function updateGauge(id){
  var basevoltage = document.getElementById("gaugeValue-" + id).value;  
  var Is=2*(Math.pow(10,-15));  
  var exponent = Math.exp(basevoltage/0.026);
  const beta=99;
  const IB= (parseFloat((Is*exponent)/beta) * Math.pow(10,7));
  basecurrent = IB.toFixed(3);
  if(basecurrent > 80){
    basecurrent = 80;
  }
  document.getElementById("VCElabel").innerHTML = basecurrent+" &#956;A"; 

  var vceconstval = document.getElementById("VCErange").value;  
  if(vceconstval==0 && basevoltage>0.6)
  {
    document.getElementById("img").src="simulation_gif/1)VCE=0-loop.gif";
  }
}

// Displaying VCE value in the voltmeter
function updateVCElabel(){
  var vceconstval = document.getElementById("VCErange").value;
  document.getElementById("Label").innerHTML = vceconstval;
  const newGaugeValue = Math.floor(((vceconstval - 0) / (40)) * 100);
  document.getElementById("demoGauge").style.setProperty('--gauge-value', newGaugeValue);

  // Displaying IC value in the ammeter
  var basevoltage = document.getElementById("gaugeValue-demoGauge").value; 
  if(basevoltage>=0.69){
    basevoltage=0.691;
  }
  var Is=2*(Math.pow(10,-15));  
  var exponent = Math.exp(basevoltage/0.026);
  const collectorCurrent = parseFloat(Is*exponent*(1+(vceconstval/100))*100000);
  cc = collectorCurrent.toFixed(2);
  document.getElementById("Label1").innerHTML =cc;
  const newGauge2Value =Math.floor(((cc - 0) / (100)) * 100);
  document.getElementById("demoGauge1").style.setProperty('--gauge-value', newGauge2Value);

  if(vceconstval>0 && vceconstval<=10)
  {
    document.getElementById("img").src="simulation_gif/Slow.gif";
  }
  else if(vceconstval>10 && vceconstval<=20)
  {
    document.getElementById("img").src="simulation_gif/medium2.5.gif";
  }
  else if(vceconstval>20 && vceconstval<=30)
  {
    document.getElementById("img").src="simulation_gif/Medium1.5.gif";
  }
  else if(vceconstval>30 && vceconstval<=40)
  {
    document.getElementById("img").src="simulation_gif/Fast0.gif";
  }
  
}

// Add To Table
// Table Creation Code JS
var tabrowindex = 0;
var xArray=[0];
var yArray=[0];
var i=1;
function tabled(){

document.getElementById("tbvce1").innerHTML = basecurrent +" &#956;A";

var sno = ++tabrowindex;
var voltce = document.getElementById("VCErange").value;
var ic = cc;
var table = document.getElementById("mytable");
var row = table.insertRow(-1);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
cell1.innerHTML = sno;
cell2.innerHTML = voltce;
cell3.innerHTML = ic;   
xArray[i]= voltce;
yArray[i]= ic;
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
  // document.getElementById("gaugeValue-demoGauge").value=0;
  document.getElementById("VCErange").value=0;
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
   xaxis: {range: [0, 40], title: "Collector-Emitter Voltage (V)"},
   yaxis: {range: [0, 100], title: "Collector Current (mA)"},  
   title: "Output Characteristics - VCE Vs IC"
  };

   // Display using Plotly
     Plotly.newPlot("myPlot", data, layout);
}
function plotgraph1(){
// Define Data
 var data = [{
   x: xArray,
   y: yArray,
   mode:"lines"
   }];

// Define Layout
var layout = {
xaxis: {range: [0, 40], title: "Collector-Emitter Voltage (V)"},
yaxis: {range: [0, 100], title: "Collector Current (mA)"},  
title: "Output Characteristics - VCE Vs IC"
};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);
}

