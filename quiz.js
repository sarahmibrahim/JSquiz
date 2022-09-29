function finish (){
    let correct = 0

    var q1 = document.getElementsByName('question1');

    // 
    // for(iterator initialize, conditional, increment)
    for(i = 0; i < q1.length; i++) {
        if(q1[i].checked){
            q1 = q1[i]
            break
        }
    }
    
    var q2 = document.getElementsByName('question2');
    for(i = 0; i < q2.length; i++) {
        if(q2[i].checked){
            q2 = q2[i]
            break
        }
    }
    var q3 = document.getElementsByName('question3');
    for(i = 0; i < q3.length; i++) {
        if(q3[i].checked){
            q3 = q3[i]
            break
        }    
    }
    var q4 = document.getElementsByName('question4');
    for(i = 0; i < q4.length; i++) {
        if(q4[i].checked){
            q4 = q4[i]
            break
            }   
         }
var q5 = document.getElementsByName('question5');
    for(i = 0; i < q5.length; i++) {
       if(q5[i].checked){
          q5 = q5[i]
          break
  }   
 }
    
    if(q1.value == "Twice") {
        correct++;
    }
    
    if(q2.value == "Grafitti") {
    
        correct++;
    }

    if(q3.value == "Lacrosse") {
    
        correct++;
    }

    if(q4.value == "Spain") {
    
        correct++;
    }

    if(q5.value == "Blessing") {
    
        correct++;
    }





    
    document.getElementById("after_submit").style.visibility = "visible"
    document.getElementById("number_correct").innerHTML = "you got  " + correct +" /5 correct.";
    document.getElementById("picture").src = "trophy.jpeg" 
}
function startQuiz() {
    document.getElementById("start").style.display = "none";
    document.getElementById("questionContainer1").style.display = "block";
    document.getElementById("questionContainer2").style.display = "none";
    document.getElementById("questionContainer3").style.display = "none";
    document.getElementById("questionContainer4").style.display = "none";
    document.getElementById("questionContainer5").style.display = "none";
}

function question2() {
    document.getElementById("questionContainer1").style.display = "none";
    document.getElementById("questionContainer2").style.display = "block";
    document.getElementById("questionContainer3").style.display = "none";
    document.getElementById("questionContainer4").style.display = "none";
    document.getElementById("questionContainer5").style.display = "none";

}
function question3() {
    document.getElementById("questionContainer1").style.display = "none";
    document.getElementById("questionContainer2").style.display = "none";
    document.getElementById("questionContainer3").style.display = "block";
    document.getElementById("questionContainer4").style.display = "none";
    document.getElementById("questionContainer5").style.display = "none";
}
function question4() {
    document.getElementById("questionContainer1").style.display = "none";
    document.getElementById("questionContainer2").style.display = "none";
    document.getElementById("questionContainer3").style.display = "none";
    document.getElementById("questionContainer4").style.display = "block";
    document.getElementById("questionContainer5").style.display = "none";
}
function question5() {
    document.getElementById("questionContainer1").style.display = "none";
    document.getElementById("questionContainer2").style.display = "none";
    document.getElementById("questionContainer3").style.display = "none";
    document.getElementById("questionContainer4").style.display = "none";
    document.getElementById("questionContainer5").style.display = "block";

}