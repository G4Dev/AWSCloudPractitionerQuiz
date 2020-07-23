// declare variable for options answers
const questionNum=document.getElementById("qNum");
const question=document.querySelector(".question");
const answerTrackerContainer=document.querySelector(".answer-tracker");
const percent=document.querySelector(".percentage");
const options=document.querySelector(".options").children;
const op1=document.querySelector(".option1");
const op2=document.querySelector(".option2");
const op3=document.querySelector(".option3");
const op4=document.querySelector(".option4");
let questionIndex;
let index=0;
let myArray=[];
let myArr=[];
let score=0;

// questions and options and answers

const questions=[
{
    id:1,
    q: '<strong>Platform as a Service (PaaS) is defined as:</strong>',
    options:['The basic building blocks for cloud IT providing access to networking features, computers, and data storage space.','A completed product that is run and managed by the service provider, and is often referred to as end-user applications.','The underlying infrastructure (usually hardware and operating systems) and allow you to focus on the deployment and management of your applications.','Is a self-service model for accessing, monitoring, and managing remote datacenter infrastructures'],
    r:2
}, 
{
    id:2,
    q: '<strong>AWS helps reduce total cost of ownership (TCO) by reducing the need to invest in large captial expenditures.</strong>',
    options:['True','False','Maybe','No Idea'],
    r:0
},
{
    id:3,
    q: '<strong>Cloud computing is the on-demand delivery of compute power, database storage, applications, and other IT resources.</strong>',
    options:['True','False','Maybe','No Idea'],
    r:0
},
{
    id:4,
    q: '<strong>Is a self-service model for accessing, monitoring, and managing remote datacenter infrastructures</strong>',
    options:['Network as a Service (NaaS)','Software as a Service (SaaS)','Platform as a Service (PaaS)','Infrastructure as a Service (IaaS)'],
    r:3
}, 
{
    id:5,
    q: '<strong>Select the benefits of cloud computing</strong>',
    options:['Show the content more beautiful, Help the user built your service','Benefit from massive economies of scale, In the cloud there is no contamination','Increase speed and agility, Stop guessing about capacity','Trade capital expense for variable expense, To be more popular company'],
    r:2
},
{
    id:6,
    q: '<strong>Select some of AWS Security Certifications</strong>',
    options:['ACPA, SOC','FPS, ISO','FIMA, ITAR','HIPA, ISAE'],
    r:3
},


]

//console.log(Object.values(questions));

// Set Question and Options

function load(){
    ///console.log(questions.length);
    //questionIndex=randomNum;
    
    //questionIndex++;
    questionNum.innerHTML=index+1;
    question.innerHTML=questions[questionIndex].q;
    op1.innerHTML=questions[questionIndex].options[0];
    op2.innerHTML=questions[questionIndex].options[1];
    op3.innerHTML=questions[questionIndex].options[2];
    op4.innerHTML=questions[questionIndex].options[3];
    index++;
    //questionIndex++;
    //console.log(questions.length +""+index);
    

}




function check(element){
 //console.log(element.id);
 if(element.id==questions[questionIndex].r){
     //console.log("correct");
     element.classList.add("correct");
     updateAnswerTracker("correct");
     score++;    
     showScore();
     //console.log("score: "+score);
      }
 else{
     //console.log("wrong");
     element.classList.add("wrong");
     updateAnswerTracker("wrong");  
 }
 //disable all options after select the option
 disabledoption();
}

function disabledoption(){
for(let i=0; i<options.length; i++){
    options[i].classList.add("disabled");
    if(options[i].id==questions[questionIndex].r){
        options[i].classList.add("correct");
    }
}
}

function enabledoption(){
    for(let i=0; i<options.length; i++){
        options[i].classList.remove("disabled","correct","wrong");
       }

}


function validate(){
    if(!options[0].classList.contains("disabled")){
        alert("Please Select One Answer");
    }
    else{
        enabledoption();
        randomQuestion();
        }
}


function next(){
validate();
}

function randomQuestion(){
    let randomNumber=Math.floor(Math.random()*questions.length);
    let hitDuplicate=0;
    
    if(index==questions.length){
         testOver();
         
    }
    else{
        
        if(myArray.length>0){
                for(let i=0; i<myArray.length; i++){
                    if(myArray[i]==randomNumber){
                        hitDuplicate=1;
                        break;
                    }
                }
                if(hitDuplicate==1){
                    randomQuestion();
                }
                else{
                    questionIndex=randomNumber;
                    load();
                    myArr.push(questionIndex);
                }          
            }
        if(myArray.length==0){
            //console.log(myArray.length);
                questionIndex=randomNumber;
                load();
                myArr.push(questionIndex);
            }

            myArray.push(randomNumber);
                }
   
}

function answerTracker(){
        for(let i=0; i<questions.length; i++){
            const div=document.createElement("div");
            answerTrackerContainer.appendChild(div);
            answerTrackerContainer.children[i].innerHTML="Check"+i
        }
}

function updateAnswerTracker(classNam){
    answerTrackerContainer.children[index-1].classList.add(classNam);
   }

function testOver(){
    //console.log(score);
    if(score==20){
        document.querySelector(".testover1").classList.add("show");
        percent.innerHTML=(score/questions.length)*100 + "%";
        //console.log("aqui");
    }
    else{
        document.querySelector(".testover").classList.add("show");
        percent.innerHTML=(score/questions.length)*100 + "%";
        
    }
    //
    
}

function showScore(){
    document.getElementById("userText").innerText=score*5;
    
}

function tryagain(){
window.location="index.html";
}

function twitter(){
    window.location="https://twitter.com/intent/tweet?text=I%20just%20earned%20my%20first%20badge%20in%20Python%20Test,%20I%20already%20have%20RANK%20B%20%20@karlgarmor%20https%3A//witty-crystal-donkey.glitch.me/Media/Images/BadgeRankB.html";
    }



window.onload=function(){
    randomQuestion();
    answerTracker();
   showScore();
    pantalla = document.getElementById("clockText");
    start();

    var carga = document.getElementById('loader-container')
        carga.style.visibility = 'hidden';
        carga.style.opacity = '0';
}




var isMarch = false; 
var acumularTime = 0; 
function start () {
         if (isMarch == false) { 
            timeInicial = new Date();
            control = setInterval(cronometro,10);
            isMarch = true;
            }
         }
function cronometro () { 
         timeActual = new Date();
         acumularTime = timeActual - timeInicial;
         acumularTime2 = new Date();
         acumularTime2.setTime(acumularTime); 
         cc = Math.round(acumularTime2.getMilliseconds()/10);
         ss = acumularTime2.getSeconds();
         mm = acumularTime2.getMinutes();
         hh = acumularTime2.getHours()-19;
         if (cc < 10) {cc = "0"+cc;}
         if (ss < 10) {ss = "0"+ss;} 
         if (mm < 10) {mm = "0"+mm;}
         if (hh < 10) {hh = "0"+hh;}
         pantalla.innerHTML = hh+" : "+mm+" : "+ss;
         }
