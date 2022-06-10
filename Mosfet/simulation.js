// Formula 
function updateVDSlabel(min, max){
      const newGaugeDisplayValue = document.getElementById("VDSrange").value;
      const newGaugeValue =Math.floor(((newGaugeDisplayValue - min) / (max - min)) * 100);
      const vdsconstval=document.getElementById("VDSrange").value;


      document.getElementById("demoGauge").style.setProperty('--gauge-value', newGaugeValue);
      document.getElementById("Label").innerHTML=newGaugeDisplayValue;
       var vgsconstval = document.getElementById("VGSrange").value;
        const vth = 3.0;
        const IDon = 20;
        const Vgon = 10;
        const k = (IDon)/Math.pow(Vgon-vth,2);
        var VDS = vgsconstval - vth;
        if (vgsconstval<vth){
          ID=0;
        }
        else{
        if (vdsconstval < VDS){
          ID =  parseFloat(2*k*(((VDS)*vdsconstval) - ((Math.pow(vdsconstval,2))/2)))
        }
        else{
          ID =  parseFloat(k*Math.pow(VDS,2))
        }
      }
      gauge2val=ID.toFixed(3)
      const newGauge2Value =Math.floor(((gauge2val - 0) / (94)) * 100);
      document.getElementById("demoGauge1").style.setProperty('--gauge-value', newGauge2Value)

      document.getElementById("Label1").innerHTML=gauge2val;


 
      if(vdsconstval>=0 && vdsconstval<=15 && vgsconstval==0)
      {
        document.getElementById("img").src="simulation_gif/VGS0VDS15.jpg";
      
      }
      else if(vdsconstval>=15.1 && vdsconstval<=30 && vgsconstval==0)
      {
        document.getElementById("img").src="simulation_gif/VGS0VDS30.jpg";
      
      }
      else if(vdsconstval>=30.1 && vdsconstval<=45 && vgsconstval==0)
      {
        document.getElementById("img").src="simulation_gif/VGS0VDS45.jpg";
      
      }
      else if(vdsconstval>=45.1 && vdsconstval<=60 && vgsconstval==0)
      {
        document.getElementById("img").src="simulation_gif/VGS0VDS60.jpg";
      
      }
      else if(vdsconstval>=0 && vdsconstval<=1 && vgsconstval==3.5)
      {
        document.getElementById("img").src="simulation_gif/VGS3.5VDS1.gif";
      }
      else if(vdsconstval>=0 && vdsconstval<=15 && vgsconstval>=3.6 && vgsconstval<=15)
      {
        document.getElementById("img").src="simulation_gif/VGS10VDS10.gif";
      }
      else if(vdsconstval>=15.1 && vdsconstval<=30 && vgsconstval>=3.6 && vgsconstval<=15)
      {
        document.getElementById("img").src="simulation_gif/VGS10VDS25.gif";
      }
      else if(vdsconstval>=30.1 && vdsconstval<=45 && vgsconstval>=3.6 && vgsconstval<=15)
      {
        document.getElementById("img").src="simulation_gif/VGS10VDS45.gif";
      }
      else if(vdsconstval>=45.1 && vdsconstval<=60 && vgsconstval>=3.6 && vgsconstval<=15)
      {
        document.getElementById("img").src="simulation_gif/VGS10VDS60.gif";
      }
      else if(vdsconstval>=0 && vdsconstval<=15 && vgsconstval>=15.1 && vgsconstval<=23)
      {
        document.getElementById("img").src="simulation_gif/VGS23VDS10.gif";
      }
      else if(vdsconstval>=15.1 && vdsconstval<=30 && vgsconstval>=15.1 && vgsconstval<=23)
      {
        document.getElementById("img").src="simulation_gif/VGS23VDS25.gif";
      }
      else if(vdsconstval>=30.1 && vdsconstval<=45 && vgsconstval>=15.1 && vgsconstval<=23)
      {
        document.getElementById("img").src="simulation_gif/VGS23VDS45.gif";
      }
      else if(vdsconstval>=45.1 && vdsconstval<=60 && vgsconstval>=15.1 && vgsconstval<=23)
      {
        document.getElementById("img").src="simulation_gif/VGS23VDS60.gif";
      }
      else if(vdsconstval>=0 && vdsconstval<=15 && vgsconstval>=23.1)
      {
        document.getElementById("img").src="simulation_gif/VGS30VDS10.gif";
      }
      else if(vdsconstval>=15.1 && vdsconstval<=30 && vgsconstval>=23.1)
      {
        document.getElementById("img").src="simulation_gif/VGS30VDS25.gif";
      }
      else if(vdsconstval>=30.1 && vdsconstval<=45 && vgsconstval>=23.1)
      {
        document.getElementById("img").src="simulation_gif/VGS30VDS45.gif";
      }
      else if(vdsconstval>=45.1 && vdsconstval<=60 && vgsconstval>=23.1)
      {
        document.getElementById("img").src="simulation_gif/VGS30VDS60.gif";
      }
    }

    // GIF for VCE when VBE=0
    var flag=1;
    var flag1=1;
    function updateVGSlabel(){
      const vdsconstval=document.getElementById("VDSrange").value;
      var vgsconstval = document.getElementById("VGSrange").value;
      document.getElementById("VGSlabel").innerHTML=vgsconstval+"V";
      if(vgsconstval>=0 && vgsconstval<=0.7 && vdsconstval==0)
      {
        document.getElementById("img").src="simulation_gif/VGS_0_to_0.7.jpg";
        flag=1;
        flag1=1;
      }
      else if(vgsconstval>=0.8 && vgsconstval<=3 && vdsconstval==0){
        if(flag==1){
          document.getElementById("img").src="simulation_gif/VGSLessthanhalfVt.gif";
          flag=0;
        }
        flag1=1;
      }
      else if(vgsconstval>=3.1 && vgsconstval<=3.5 && vdsconstval==0){
        if(flag1==1){
          document.getElementById("img").src="simulation_gif/VGSGreaterThanhalfVTH.gif";
          flag1=0;}
      }
      if(vgsconstval>=3.6 && vdsconstval==0)
      {
        document.getElementById("img").src="simulation_gif/VGS3.5_to_10.jpg";
        flag=1;
        flag1=1;
      }
     
}
function displayfn(){
  document.getElementById("start").style.display="none";  
  document.getElementById("FormNPN").style.display="inline";
  document.getElementById("instruct").innerHTML="Click Form NPN";
}
function displayfn1(){
  document.getElementById("FormNPN").style.display="none";  
  document.getElementById("instruct").innerHTML=" In Mosfet, P-Substrate is lightly doped in which holes are the majority carriers."    
  document.getElementById("img").src="simulation_gif/FormationOfNPN.gif";
  setTimeout( function() {
    document.getElementById("SetVGS").innerHTML="N Substrate";
    document.getElementById("SetVGS").style.boxShadow=' ';
    document.getElementById("instruct").innerHTML="In Mosfet, both source and drain regions are made up of N-Substrate in which the electrons are the majority carriers.";
   },7000);   
  setTimeout( function() {
    document.getElementById("SetVGS").innerHTML="Depletion Layer";
  document.getElementById("instruct").innerHTML="There is a formation of depletion layer between the P-Substrate and N-Substrates.";
   },20200); 
   setTimeout( function() {
    document.getElementById("SetVGS").innerHTML="SiO<sub>2</sub>";
  document.getElementById("instruct").innerHTML="SiO<sub>2</sub> above the P-Substrate acts as an insulator.";
   },29100); 
  setTimeout( function() {
    document.getElementById("SetVGS").innerHTML="Circuit Connection";
    // document.getElementById("SetVGS").disabled=false;
  document.getElementById("instruct").innerHTML="Once the NPN is formed, circuit connection is given and you can see that gate terminal is insulated from P-Substrate by SiO<sub>2</sub> to avoid gate current.";
},36000);
setTimeout( function() {
  document.getElementById("SetVGS").innerHTML="SET VGS";
  document.getElementById("SetVGS").disabled=false;
document.getElementById("instruct").innerHTML="Click the SET VGS button.";
},51000);           
  document.getElementById("SetVGS").style.display="inline";       
}
function displayfn2(){  
  document.getElementById("SetVGS").style.display="none";
  document.getElementById("VaryVDS").style.display="inline";          
  document.getElementById("VGSrange").style.display="inline"
  document.getElementsByClassName("HoriSlider2")[0].style.display="inline";
  document.getElementById("instruct").innerHTML="Vary VGS using upper horizontal slider,You can observe that there is a formation of n-channel between source and drain only after VGS greater than 3V(Threshold Voltage).<br>Now Set VGS as a constant voltage.";

}
function displayfn3(){
  document.getElementById("VaryVDS").style.display="none";
  document.getElementById("end").style.display="inline";
  document.getElementById("VGSrange").style.display="none";
  document.getElementsByClassName("HoriSlider2")[0].style.display="none";
  document.getElementById("VDSrange").style.display="inline";
  document.getElementsByClassName("HoriSlider1")[0].style.display="inline"; 
  document.getElementById("instruct").innerHTML="Vary VDS  using the slider given, add the corresponding Drain current value to the Table.Once a set of readings are taken Set another VGS And repeat the same procedure"
}

 // Table Creation Code JS
 var tabrowindex = 0;
 var xArray=[0];
 var yArray=[0];
 var i=1;
 function tabled(){
 var vgs = document.getElementById("VGSrange").value;
 document.getElementById("tbvgs1").innerHTML = vgs+" V";

 var sno = ++tabrowindex;
 var vds = document.getElementById("VDSrange").value;
 var id = gauge2val;
 var table = document.getElementById("mytable");
 var row = table.insertRow(-1);
 var cell1 = row.insertCell(0);
 var cell2 = row.insertCell(1);
 var cell3 = row.insertCell(2);
 cell1.innerHTML = sno;
 cell2.innerHTML = vds;
 cell3.innerHTML = id;   
 xArray[i]=vds;
 yArray[i]=id;
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
  var vdsconstval= 0;
  flag = 1;
  flag1=1;
  var vgsconstval = document.getElementById("VGSrange").value;
   document.getElementById("end").style.display="inline";
   document.getElementById("VGSrange").style.display="inline"
  document.getElementsByClassName("HoriSlider2")[0].style.display="inline";
  document.getElementById("VDSrange").style.display="inline";
  document.getElementsByClassName("HoriSlider1")[0].style.display="inline";
   document.getElementById("VDSrange").value=0;
   const newGaugeValue =0;
   document.getElementById("demoGauge").style.setProperty('--gauge-value', newGaugeValue);
   document.getElementById("Label").innerHTML= 0.00;
   
   const newGauge2Value =0;
   document.getElementById("demoGauge1").style.setProperty('--gauge-value', newGauge2Value);

   document.getElementById("Label1").innerHTML= 0.00;
   if(vgsconstval>=0 && vgsconstval<=0.7 && vdsconstval==0)
      {
        document.getElementById("img").src="simulation_gif/VGS_0_to_0.7.jpg";
        flag=1;
        flag1=1;
      }
      else if(vgsconstval>=0.8 && vgsconstval<=2 && vdsconstval==0){
        if(flag==1){
          document.getElementById("img").src="simulation_gif/VGSLessthanhalfVt.gif";
          flag=0;
        }
        flag1=1;
      }
      else if(vgsconstval>=2.1 && vgsconstval<=3.5 && vdsconstval==0){
        if(flag1==1){
          document.getElementById("img").src="simulation_gif/VGSGreaterThanhalfVTH.gif";
          flag1=0;}
      }
      if(vgsconstval>=3.6 && vgsconstval<=10 && vdsconstval==0)
      {
        document.getElementById("img").src="simulation_gif/VGS3.5_to_10.jpg";
        flag=1;
        flag1=1;
      }
      if(vgsconstval>=10.1 && vgsconstval<=20 && vdsconstval==0)
      {
        document.getElementById("img").src="simulation_gif/VGS10.1_to_20.jpg";
        flag=1;
        flag1=1;
      }
      else if(vgsconstval>=20.1 && vgsconstval<=30 && vdsconstval==0)
      {
        document.getElementById("img").src="simulation_gif/VGS20.1_to_30.jpg";
        flag=1;
        flag1=1;
      }
   console.log('sd')
   while(tabrowindex){
   document.getElementById("mytable").deleteRow(-1);
   tabrowindex--;
   }
   document.getElementById("tbvgs1").innerHTML = " ";       
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
      xaxis: {range: [0, 60], title: "Drain-Source Voltage (V)"},
      yaxis: {range: [0, 300], title: "Drain Current (A)"},  
      title: "Drain Characteristics - VDS Vs ID"
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
xaxis: {range: [0, 60], title: "Drain-Source Voltage (V)"},
yaxis: {range: [0, 300], title: "Drain Current (A)"},  
title: "Drain Characteristics - VDS Vs ID"
};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);
}

//csv download
function exportData(){
  /* Get the HTML data using Element by Id */
  var table = document.getElementById("mytable");

  /* Declaring array variable */
  var rows =[["S.no","DrainSource Voltage (V)","Drain Current (A)"]];

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
      link.setAttribute("download", "DrainCharacteristics.csv");
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