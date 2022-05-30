// Formula 

var gauge2val;
function updateGauge(id, min, max){
  

    var vzconstval=document.getElementById("VZrange").value;
    document.getElementById("Vinlabel").innerHTML=vzconstval;
    var newGaugeDisplayValue = document.getElementById("VZrange").value;
    if (newGaugeDisplayValue > 5.1)
    {
      var vd=5;
      newGaugeDisplayValue = 5.1;
      var V = vzconstval-vd;
    var Cur = -(V*V);
    gauge2val = Cur.toFixed(3);
    }
    else
    {
      gauge2val=0;
    }
    
    const newGaugeValue =Math.floor(((newGaugeDisplayValue - min) / (max - min)) * 100);
    
    document.getElementById(id).style.setProperty('--gauge-value', newGaugeValue);
    document.getElementById("Label").innerHTML="-"+newGaugeDisplayValue;
//Formula for IZ   
    
    const newGauge2Value =Math.floor(gauge2val * 100);
    document.getElementById("demoGauge1").style.setProperty('--gauge-value', newGauge2Value);
    document.getElementById("Label1").innerHTML=gauge2val;

  // GIF For VBE from 0.6 to 0.7
  if(vzconstval>0 && vzconstval<2.5)
  {
    document.getElementById("img").src="simulation_gif/Rb1.gif";
  }
  else if(vzconstval>=2.5 && vzconstval<=5)
  {
    document.getElementById("img").src="simulation_gif/Rb2.gif";
  }
  else if(vzconstval==5.1)
  {
    document.getElementById("img").src="simulation_gif/At_0.7.gif";
  }
  else if(vzconstval>5.1 && vzconstval<=7.5 )
  {
    document.getElementById("img").src="simulation_gif/medium.gif";
  }
  else if(vzconstval>7.5 && vzconstval<=10 )
  {
    document.getElementById("img").src="simulation_gif/fast.gif";
  }
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
  document.getElementById("img").src="simulation_gif/Intro.gif";
  setTimeout( function() {
    document.getElementById("SetVCE").innerHTML="P TYPE";
    document.getElementById("SetVCE").style.boxShadow=' ';
    document.getElementById("instruct").innerHTML="It is the center region. The majority carriers from the emitter region are injected into this region. This region is very thin and lightly doped.";
   },820); 
  setTimeout( function() {
    document.getElementById("SetVCE").innerHTML="VARY V<sub>in</sub>";
    document.getElementById("SetVCE").disabled=false;
  document.getElementById("instruct").innerHTML="Set VCE as a constant by varying the slider. Once it's set. Click vary VBE";
},3600);           
  document.getElementById("SetVCE").style.display="inline";       
}
function displayfn2(){  
  document.getElementById("SetVCE").style.display="none";
  document.getElementById("VaryVBE").style.display="inline";          
  document.getElementById("VZrange").style.display="inline";
  document.getElementsByClassName("HoriSlider")[0].style.display="inline";
}
function displayfn3(){
  document.getElementById("VaryVBE").style.display="none";
  document.getElementById("end").style.display="inline";
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
 var vz = -(document.getElementById("VZrange").value);
 if (vz <= -5.1){
   vz = -5.1;
 }
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
  document.getElementById("VZrange").value = 0;
   updateGauge('demoGauge', 0, 10);
   document.getElementById("img").src="simulation_gif/intro_zener.png";
   while(tabrowindex){
   document.getElementById("mytable").deleteRow(-1);
   tabrowindex--;
   }
  //  document.getElementById("tbvce1").innerHTML = " ";       
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
    xaxis: {range: [0, -10], title: "Zener Voltage (V)"},
    yaxis: {range: [0, -30], title: "Zener Current (&#956;A)"},  
    title: "Reverse Characteristics - VZ Vs IZ"
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
xaxis: {range: [0,-10], title: "Zener Voltage (V)"},
yaxis: {range: [0,-30], title: "Zener Current (&#956;A)"},  
title: "Reverse Characteristics - VZ Vs IZ"
};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);
}


