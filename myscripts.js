var check;

function disable() {
    document.getElementById("s1").disabled = true;
    }

function enable2(){
  document.getElementById("interval1").disabled = false;
}
    
function enable() {
    if (check==1)
    {
    document.getElementById("s1").disabled = false;
    document.getElementById('myImg').src = "0v.gif";
    }
    else
    {
        alert("Form P-N Junction first");
    }
}

function timedText() {
    setTimeout(myTimeout0, 900)
    setTimeout(myTimeout1, 1000) 
    setTimeout(myTimeout2, 1030)
    setTimeout(myTimeout3, 1070) 
    }
 
function timedText1(){
  setTimeout(myTimeout4, 1000)
  setTimeout(myTimeout5, 6000)
 }   
    



function myTimeout0() {
    document.getElementById('myImg').src = "p-n222.gif";
    } 
function myTimeout1() {
    document.getElementById('myImg').src = "p-n2.gif";
    }
function myTimeout2() {
    document.getElementById('myImg').src = "jnformation112.gif";
    }
function myTimeout3() {
    document.getElementById('myImg').src = "Snapshot_6.gif";
    check=1;
    }    
function myTimeout4() {
    document.getElementById('myImg').src = "depletion_layer1112.gif";
    }
function myTimeout5() {
    document.getElementById('myImg').src = "Snapshot_1.gif";
    
}

function diodeval()
{
    var Vs=Number(document.getElementById("bnn").value);
    var vd=0.53;
    if(Vs>=0.54 && Vs<0.7)
    {
        document.getElementById("diode").innerHTML= 0.53+' '+ 'V';
    }
    else if(Vs>=0.7 && Vs<0.9)
    {
        document.getElementById("diode").innerHTML= 0.54+' '+ 'V';
    }
    else if(Vs>=0.9 && Vs<1.1)
    {
        document.getElementById("diode").innerHTML= 0.58+' '+ 'V';
    }
    else if(Vs>=1.1 && Vs<1.3)
    {
        document.getElementById("diode").innerHTML= 0.6+' '+ 'V';
    }
    else if(Vs>=1.3 && Vs<1.5)
    {
        document.getElementById("diode").innerHTML= 0.63+' '+ 'V';
    }
    else if(Vs>=1.5 && Vs<1.7)
    {
        document.getElementById("diode").innerHTML= 0.65+' '+ 'V';
    }
    else if(Vs>=1.7 && Vs<1.9)
    {
        document.getElementById("diode").innerHTML= 0.68+' '+ 'V';
    }
    else if(Vs>=1.9 && Vs<2.1)
    {
        document.getElementById("diode").innerHTML= 0.7+' '+ 'V';
    }
    else if(Vs>=2.1 && Vs<2.3)
    {
        document.getElementById("diode").innerHTML= 0.71+' '+ 'V';
    }
    else if(Vs>=2.3 && Vs<2.6)
    {
        document.getElementById("diode").innerHTML= 0.72+' '+ 'V';
    }
    else if(Vs>=2.6 && Vs<2.9)
    {
        document.getElementById("diode").innerHTML= 0.73+' '+ 'V';
    }
    else if(Vs>=2.9 && Vs<3.3)
    {
        document.getElementById("diode").innerHTML= 0.74+' '+ 'V';
    }
    else if(Vs>=3.3 && Vs<3.6)
    {
        document.getElementById("diode").innerHTML= 0.75+' '+ 'V';
    }
    else if(Vs>=3.6 && Vs<4.1)
    {
        document.getElementById("diode").innerHTML= 0.76+' '+ 'V';
    }
    else if(Vs>=4.1)
    {
        document.getElementById("diode").innerHTML= 0.77+' '+ 'V';
    }
    else
    {
        document.getElementById("diode").innerHTML= 0+' '+ 'V';
    }
}
function currentval()
{
    var Vs=Number(document.getElementById("bnn").value);
    var vd=0.53;
    if(Vs>=0.54)
    {    
    var V = Vs-vd;
    var r = 1000;
    var Cur = V/r*1000;
    var I = Cur.toFixed(3);
    document.getElementById("current").innerHTML= I +' '+ 'mA';  
    }
    else
    {
        document.getElementById("current").innerHTML= '0 A';

    }
}

function diodevalrb()
{
    var Vs=Number(document.getElementById("bnn").value);
    if(Vs==8)
    {
        document.getElementById("diode").innerHTML= 3+' '+ 'V';
    }
    else if(Vs==16)
    {
        document.getElementById("diode").innerHTML= 13+' '+ 'V';
    }
    else if(Vs==24)
    {
        document.getElementById("diode").innerHTML= 13.6+' '+ 'V';
    }
    else if(Vs==32)
    {
        document.getElementById("diode").innerHTML= 25+' '+ 'V';
    }
    else if(Vs==40)
    {
        document.getElementById("diode").innerHTML= 36.5+' '+ 'V';
    }
    else if(Vs==48)
    {
        document.getElementById("diode").innerHTML= 43.5+' '+ 'V';
    }
    else if(Vs==56)
    {
        document.getElementById("diode").innerHTML= 50+' '+ 'V';
    }
    else
    {
        document.getElementById("diode").innerHTML= 0+' '+ 'V';
    }
}
function currentvalrb()
{
    var Vs=Number(document.getElementById("bnn").value);
    if(Vs==8 || Vs==16)
    {    
    var Cur = 0;
    var I = Cur.toFixed(3);
    document.getElementById("current").innerHTML= I +' '+ 'µA';  
    }
    else if(Vs==24)
    {    
    var Cur = 1;
    var I = Cur.toFixed(3);
    document.getElementById("current").innerHTML= I +' '+ 'µA';  
    }
    else if(Vs==32)
    {    
    var Cur = 2;
    var I = Cur.toFixed(3);
    document.getElementById("current").innerHTML= I +' '+ 'µA';  
    }
    else if(Vs==40)
    {    
    var Cur = 3;
    var I = Cur.toFixed(3);
    document.getElementById("current").innerHTML= I +' '+ 'µA';  
    }
    else if(Vs==48)
    {    
    var Cur = 4;
    var I = Cur.toFixed(3);
    document.getElementById("current").innerHTML= I +' '+ 'µA';  
    }
    else if(Vs==56)
    {    
    var Cur = 4.3;
    var I = Cur.toFixed(3);
    document.getElementById("current").innerHTML= I +' '+ 'mA';  
    }
    else
    {
        document.getElementById("current").innerHTML= 0 + ' '+ 'A';

    }
}

function Simulation(){
    aim.style.display="none";
    simulation.style.display="block";
    theory.style.display="none";
    procedure.style.display="none";
    prequiz.style.display="none";
    feedbaack.style.display="none";
    outcome.style.display="none";
}
function Procedure(){
    aim.style.display="none";
    simulation.style.display="none";
    theory.style.display="none";
    procedure.style.display="block";
    prequiz.style.display="none";
    feedbaack.style.display="none";
    outcome.style.display="none";
}
function Theory(){    
    aim.style.display="none";
    simulation.style.display="none";
    theory.style.display="block";
    procedure.style.display="none";
    prequiz.style.display="none";
    feedbaack.style.display="none";
    outcome.style.display="none";
}
function Aim(){
    aim.style.display="block";
    simulation.style.display="none";
    theory.style.display="none";
    procedure.style.display="none";
    prequiz.style.display="none";
    feedbaack.style.display="none";
    outcome.style.display="none";
}
function Outcome(){
  aim.style.display="none";
  simulation.style.display="none";
  theory.style.display="none";
  procedure.style.display="none";
  prequiz.style.display="none";
  feedbaack.style.display="none";
  outcome.style.display="block";

}
function Feedbaack(){
  aim.style.display="none";
  simulation.style.display="none";
  theory.style.display="none";
  procedure.style.display="none";
  prequiz.style.display="none";
  feedbaack.style.display="block";
  outcome.style.display="none";
}
function Prequiz(){
    aim.style.display="none";
    feedbaack.style.display="none";
    simulation.style.display="none";
    theory.style.display="none";
    procedure.style.display="none";
    prequiz.style.display="block";
    outcome.style.display="none";
    function buildQuiz(){
     
      const output = [];
  
     
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          const answers = [];

          for(letter in currentQuestion.answers){
  
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      
      let numCorrect = 0;
  
      myQuestions.forEach( (currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        if(userAnswer === currentQuestion.correctAnswer){
          numCorrect++;
          answerContainers[questionNumber].style.color = 'green';
        }
        else{
          answerContainers[questionNumber].style.color = 'red';
        }
      });
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "1. If the PIV rating of the diode is exceeded,............",
        answers: {
          a: "the diode conducts poorly",
          b: "the diode is destroyed",
          c: "the diode behaves like a zener diode"
        },
        correctAnswer: "b"
      },
      {
        question: "2. Reverse current in a diode is in the order of ?",
        answers: {
          a: "µA",
          b: "mA",
          c: "A"
        },
        correctAnswer: "a"
      },
      {
        question: "3. When diodes are connected in series to increase voltage rating the peak inverse voltage per junction ",
        answers: {
          a: "should not exceed half the breakdown voltage",
          b: "should not exceed the breakdown voltage",
          c: "should not exceed one third the breakdown voltage",
          d: "may be equal to or less than breakdown voltage"
        },
        correctAnswer: "c"
      }
    ];
    buildQuiz();
    submitButton.addEventListener('click', showResults);
  }
  window.onload=function() {
    document.getElementById("interval1").disabled=true;
    document.getElementById("interval2").disabled=true;

  }