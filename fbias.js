function myTimeout00() {
    document.getElementById('myImg').src = "1.gif";
    } 
function myTimeout11() {
    document.getElementById('myImg').src = "2.gif";
    }
function myTimeout22() {
    document.getElementById('myImg').src = "3.gif";
    }

function myTimeout33() {
    document.getElementById('myImg').src = "0v.gif";
    }
    
function fbias(asdf) {
    document.getElementById('bnn').innerHTML=asdf;
    var v = asdf;
    if(v>=0 && v<0.1)
    {

        step3.style.display="block";
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="none";
        step7.style.display="none";
        document.getElementById('myImg').src= "Snapshot_1.gif";
    }
    else if(v==0.1)
    {
        step3.style.display="none";
        step4.style.display="block";
        step5.style.display="none";
        step6.style.display="none";
        step7.style.display="none";
        setTimeout(myTimeout00, 0)
        setTimeout(myTimeout11, 700) 
        setTimeout(myTimeout22, 1200)
        setTimeout(myTimeout33, 1700)
    }
    else if(v>=0.11 && v<=0.53)
    {
        step3.style.display="none";
        step4.style.display="block";
        step5.style.display="none";
        step6.style.display="none";
        step7.style.display="none";
        document.getElementById('myImg').src= "06.gif";
    }
    else if(v >= 0.54 && v <= 0.58 )
    {      
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="block";
        step6.style.display="none";
        step7.style.display="none";
        document.getElementById('myImg').src= "fbiasworkloop1.gif";
    }
    else if(v > 0.58 && v <= 0.6 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="block";
        step7.style.display="none";
        document.getElementById('myImg').src= "fbiasworkloop1.5.gif";
    }
    else if(v > 0.6 && v <= 0.65 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="block";
        step7.style.display="none";
        document.getElementById('myImg').src= "fbiasworkloop2.gif";
    }
    else if(v > 0.65 && v <= 0.7 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="block";
        step7.style.display="none";
        document.getElementById('myImg').src= "fbiasworkloop2.5.gif";
    }
    else if(v > 0.7 && v <= 0.72 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="block";
        step7.style.display="none";
        document.getElementById('myImg').src= "fbiasworkloop3.gif";
    }
    else if(v > 0.72 && v <= 0.74 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="block";
        step7.style.display="none";
        document.getElementById('myImg').src= "fbiasworkloop3.5.gif";
    }
    else if(v > 0.74 && v <= 0.76 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="block";
        step7.style.display="none";
        document.getElementById('myImg').src= "fbiasworkloop4.gif";
    }
    else if(v > 76 && v <= 0.77 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="block";
        step7.style.display="none";
        document.getElementById('myImg').src= "fbiasworkloop4.5.gif";
    }
    else if(v > 0.77 && v <= 2 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="block";
        step7.style.display="none";
        document.getElementById('myImg').src= "fbiasworkloop5.gif";
    }
    else if(v > 2 && v <= 2.5 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="block";
        step7.style.display="none";
        document.getElementById('myImg').src= "fbiasworkloop6.gif";
    }
    else if(v > 2.5 && v <= 3)
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="block";
        step7.style.display="none";
        document.getElementById('myImg').src= "fbiasworkloop7.gif";
    }
    else if(v > 3 && v <= 3.5 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="none";
        step7.style.display="block";
        document.getElementById('myImg').src= "fbiasworkloop8.gif";
    }
    else if(v > 3.5 && v <= 4 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="none";
        step7.style.display="block";
        document.getElementById('myImg').src= "fbiasworkloop9.gif";
    }
    else if(v > 4 && v <= 5 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="none";
        step7.style.display="block";
        document.getElementById('myImg').src= "fbiasworkloop10.gif";
    }
    
}
function steptwo()
{
    step1.style.display="none";
    step2.style.display="block";
    
}
function stepthree()
{
    step2.style.display="none";
    step3.style.display="block";

}
function stepfour()
{
    step3.style.display="none";
    step4.style.display="block";

}
function reset() 
  {
      document.getElementById('myImg').src= "p-n221.gif";
      document.getElementById("interval1").disabled=true;
      document.getElementById("interval2").disabled=true;
      document.getElementById("interval").disabled= false;
      document.getElementById("s1").value = "0";
      document.getElementById("diode").value = "0 V";
      document.getElementById("current").value = "0 A";
      document.getElementById("bnn").value = "0";
      document.getElementById("bnn2").value = "0";
      document.getElementById("s1").disabled = true;
      step3.style.display="none";  
      step4.style.display="none";
      step5.style.display="none";
      step6.style.display="none";
      step7.style.display="none";
      step1.style.display="block";
      step2.style.display="none";
      
      
  }
