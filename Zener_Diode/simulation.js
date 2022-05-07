// Formula 
function updateGauge(id, min, max){
    const newGaugeDisplayValue = document.getElementById("gaugeValue-" + id).value;
    const newGaugeValue =Math.floor(((newGaugeDisplayValue - min) / (max - min)) * 100);
    const vce=document.getElementById("VCErange").value;
    document.getElementById(id).style.setProperty('--gauge-value', newGaugeValue);
    document.getElementById("Label").innerHTML=newGaugeDisplayValue;
    var vceconstval = document.getElementById("VCErange").value;

//Formula for IB
    //VT=26mv
    //Is=2*10^-15
    const Is=2*(Math.pow(10,-15));
    const c=Math.exp((40.5-vce)*0.01);
    const exponent=Math.exp(newGaugeDisplayValue/0.026);
    const beta=99;
    const IB= c*(parseFloat((Is*exponent)/beta) * Math.pow(10,7));
    gauge2val=IB.toFixed(3);
    if(gauge2val>80){
      gauge2val=80;
    }
    const newGauge2Value =Math.floor(((gauge2val - 2.126) / (678.732)) * 100);
    document.getElementById("demoGauge1").style.setProperty('--gauge-value', newGauge2Value);
    document.getElementById("Label1").innerHTML=gauge2val;

  // GIF For VBE from 0.6 to 0.7

  var vbeconstval= document.getElementById("gaugeValue-demoGauge").value;
   if(vbeconstval>=0.600 && vbeconstval<=0.610 && vceconstval==0)
  {
    document.getElementById("img").src="simulation_gif/Initial-Flow-of-electron.gif";
  
  }
  else if(vbeconstval>0.610 && vbeconstval<=0.630)
  {
    document.getElementById("img").src="simulation_gif/Slow.gif";
  }
  else if(vbeconstval>0.630 && vbeconstval<=0.650)
  {
    document.getElementById("img").src="simulation_gif/medium2.5.gif";
  }
  else if(vbeconstval>0.650 && vbeconstval<=0.670)
  {
    document.getElementById("img").src="simulation_gif/Medium1.5.gif";
  }
  else if(vbeconstval>0.670 && vbeconstval<=0.700)
  {
    document.getElementById("img").src="simulation_gif/Fast0.gif";
  }
}

// GIF for VCE when VBE=0
var flag=1;
var flag1=1;
var flag2=1;
function updateVCElabel(){
  var vceconstval = document.getElementById("VCErange").value;
  document.getElementById("VCElabel").innerHTML=vceconstval+"V";
  if(vceconstval>=0 && vceconstval<=0.5){
     document.getElementById("img").src="simulation_gif/NewVCE-0-to-0.6.gif";
     flag=1;
     flag1=1;
     flag2=1;
  }
  else if(vceconstval==0.6 ){
    document.getElementById("img").src="simulation_gif/At-0.6.gif";
    flag=1;
    flag1=1;
     flag2=1;
  }
  else if(vceconstval==0.7 )
  {
      document.getElementById("img").src="simulation_gif/EBBreaking.gif";
      flag=1;
      flag1=1;
     flag2=1;
  }
  else if(vceconstval>0.7 && vceconstval<=20 )
  {
      if(flag==1){
         document.getElementById("img").src="simulation_gif/Above 0.7 Extra1Layer.gif";
         flag=0;
        }
        flag1=1;
     flag2=1;
  }
  else if(vceconstval>20 && vceconstval<=30)
  {
      if(flag1==1){
         document.getElementById("img").src="simulation_gif/Above 0.7 Extra2Layers.gif";
         flag1=0;
        }
        flag=1;
        flag2=1;

  }
  else if(vceconstval>30 && vceconstval<40)
  {
      if(flag2==1){
         document.getElementById("img").src="simulation_gif/Above 0.7 Extra3Layers.gif";
         flag2=0;
        }
        flag1=1;
        flag=1;
  }
  
}
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
 var vce = document.getElementById("VCErange").value;
 document.getElementById("tbvce1").innerHTML = vce+" V";

 var sno = ++tabrowindex;
 var vbe = document.getElementById("gaugeValue-demoGauge").value;
 var ib = gauge2val;
 var table = document.getElementById("mytable");
 var row = table.insertRow(-1);
 var cell1 = row.insertCell(0);
 var cell2 = row.insertCell(1);
 var cell3 = row.insertCell(2);
 cell1.innerHTML = sno;
 cell2.innerHTML = vbe;
 cell3.innerHTML = ib;   
 xArray[i]=vbe;
 yArray[i]=ib;
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
    xaxis: {range: [0, 0.9], title: "Base-Emitter Voltage (V)"},
    yaxis: {range: [0, 150], title: "Base Current (&#956;A)"},  
    title: "Input Characteristics - VBE Vs IB"
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
xaxis: {range: [0, 0.9], title: "Base-Emitter Voltage (V)"},
yaxis: {range: [0, 150], title: "Base Current (&#956;A)"},  
title: "Input Characteristics - VBE Vs IB"
};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);
}


