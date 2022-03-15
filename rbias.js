var checks;
function enablerb() {
    if (checks==1)
    {
    document.getElementById("s1").disabled = false;
    document.getElementById('myImg').src = "0vrb.gif";
    }
    else
    {
        alert("Form P-N Junction first");
    }
}

function timedTextrb() {
    setTimeout(myTimeout0, 900)
    setTimeout(myTimeout1, 1000) 
    setTimeout(myTimeout2, 1030)
    setTimeout(myTimeout3, 1070) 
    }
 
function timedText1rb(){
  setTimeout(myTimeout4, 1000)
  setTimeout(myTimeout5, 6000)
 }   
    



function myTimeout0() {
    document.getElementById('myImg').src = "p-n222rb.gif";
    } 
function myTimeout1() {
    document.getElementById('myImg').src = "p-n2rb.gif";
    }
function myTimeout2() {
    document.getElementById('myImg').src = "jnformation112rb.gif";
    }
function myTimeout3() {
    document.getElementById('myImg').src = "Snapshot_6rb.gif";
    checks=1;
    }    
function myTimeout4() {
    document.getElementById('myImg').src = "depletion_layer1112rb.gif";
    }
function myTimeout5() {
    document.getElementById('myImg').src = "Snapshot_1rb.gif";
    
}    
    function myTimeoutr0() {
        document.getElementById('myImg').src = "1dep.gif";
        } 
    function myTimeoutr1() {
        document.getElementById('myImg').src = "FreezeFrame1.gif";
        }
    function myTimeoutr2() {
        document.getElementById('myImg').src = "2dep.gif";
        } 
    function myTimeoutr3() {
        document.getElementById('myImg').src = "FreezeFrame2.gif";
        }
    function myTimeoutr4() {
        document.getElementById('myImg').src = "3dep.gif";
        } 
    function myTimeoutr5() {
        document.getElementById('myImg').src = "FreezeFrame3.gif";
        }
    function myTimeoutr6() {
        document.getElementById('myImg').src = "4dep.gif";
        } 
    function myTimeoutr7() {
        document.getElementById('myImg').src = "FreezeFrame4.gif";
        }
    function myTimeoutr8() {
        document.getElementById('myImg').src = "5dep.gif";
        } 
    function myTimeoutr9() {
        document.getElementById('myImg').src = "FreezeFrame5.gif";
        }
    function myTimeoutr10() {
        document.getElementById('myImg').src = "6dep.gif";
        } 
    function myTimeoutr11() {
        document.getElementById('myImg').src = "FreezeFrame6.gif";
        }
        


function rbias(asdf) {
    document.getElementById('bnn').innerHTML=asdf;
    var v = asdf;
    if(v==0)
    {
        step3.style.display="none";
        step4.style.display="block";
        step5.style.display="none";
        step6.style.display="none";
        step7.style.display="none";
        document.getElementById('myImg').src = "0v.gif";
        myTimeoutr0.display="none";
        myTimeoutr1.display="none";
        myTimeoutr2.display="none";
        myTimeoutr3.display="none";
        myTimeoutr4.display="none";
        myTimeoutr5.display="none";
        myTimeoutr6.display="none";
        myTimeoutr7.display="none";
        myTimeoutr8.display="none";
        myTimeoutr9.display="none";
        myTimeoutr10.display="none";
        myTimeoutr11.display="none";
    }
    else if(v>0 && v<=8)
    {
        step3.style.display="none";
        step4.style.display="none";
        step5.style.display="block";
        step6.style.display="none";
        step7.style.display="none";
        setTimeout(myTimeoutr0, 0)
        setTimeout(myTimeoutr1, 2014)
        myTimeoutr2.display="none";
        myTimeoutr3.display="none";
        myTimeoutr4.display="none";
        myTimeoutr5.display="none";
        myTimeoutr6.display="none";
        myTimeoutr7.display="none";
        myTimeoutr8.display="none";
        myTimeoutr9.display="none";
        myTimeoutr10.display="none";
        myTimeoutr11.display="none";
    }
    else if(v >8 && v <= 16 )
    {      
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="block";
        step6.style.display="none";
        step7.style.display="none";
        setTimeout(myTimeoutr2, 0)
        setTimeout(myTimeoutr3, 2015)
        myTimeoutr0.display="none";
        myTimeoutr1.display="none";
        myTimeoutr4.display="none";
        myTimeoutr5.display="none";
        myTimeoutr6.display="none";
        myTimeoutr7.display="none";
        myTimeoutr8.display="none";
        myTimeoutr9.display="none";
        myTimeoutr10.display="none";
        myTimeoutr11.display="none";
    }
    else if(v > 16 && v <= 24 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="block";
        step7.style.display="none";
        setTimeout(myTimeoutr4, 0)
        setTimeout(myTimeoutr5, 2014)
        myTimeoutr0.display="none";
        myTimeoutr1.display="none";
        myTimeoutr2.display="none";
        myTimeoutr3.display="none";
        myTimeoutr6.display="none";
        myTimeoutr7.display="none";
        myTimeoutr8.display="none";
        myTimeoutr9.display="none";
        myTimeoutr10.display="none";
        myTimeoutr11.display="none";
    }
    else if(v > 24 && v <= 32 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="block";
        step7.style.display="none";
        setTimeout(myTimeoutr6, 0)
        setTimeout(myTimeoutr7, 2014)
        myTimeoutr0.display="none";
        myTimeoutr1.display="none";
        myTimeoutr4.display="none";
        myTimeoutr5.display="none";
        myTimeoutr2.display="none";
        myTimeoutr3.display="none";
        myTimeoutr8.display="none";
        myTimeoutr9.display="none";
        myTimeoutr10.display="none";
        myTimeoutr11.display="none";
    }
    else if(v > 32 && v <= 40 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="block";
        step7.style.display="none";
        setTimeout(myTimeoutr8, 0)
        setTimeout(myTimeoutr9, 2014)
        myTimeoutr0.display="none";
        myTimeoutr1.display="none";
        myTimeoutr4.display="none";
        myTimeoutr5.display="none";
        myTimeoutr6.display="none";
        myTimeoutr7.display="none";
        myTimeoutr2.display="none";
        myTimeoutr3.display="none";
        myTimeoutr10.display="none";
        myTimeoutr11.display="none";
    }
    else if(v > 40 && v <= 48 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="block";
        step7.style.display="none";
        setTimeout(myTimeoutr10, 0)
        setTimeout(myTimeoutr11, 2020)
        myTimeoutr0.display="none";
        myTimeoutr1.display="none";
        myTimeoutr4.display="none";
        myTimeoutr5.display="none";
        myTimeoutr6.display="none";
        myTimeoutr7.display="none";
        myTimeoutr8.display="none";
        myTimeoutr9.display="none";
        myTimeoutr2.display="none";
        myTimeoutr3.display="none";
    }
    else if(v > 48 && v <= 56 )
    {
     
        document.getElementById('myImg').src = "breakdown.gif";
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="none";
        step7.style.display="block";

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
      document.getElementById('myImg').src= "p-n221rb.gif";
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
