function check(){
  let i=0
  let q1= document.quiz.question1.value;
  let q2= document.quiz.question2.value;
  let q3= document.quiz.question3.value;
  let q4= document.quiz.question4.value;
  let q5= document.quiz.question5.value;
  let q6= document.quiz.question6.value;
  let q7= document.quiz.question7.value;
  let q8= document.quiz.question8.value;
  let q9= document.quiz.question9.value;
  let q10= document.quiz.question10.value;
  let result =document.getElementById("result");
  let quiz = document.getElementById("quiz")
  if(q1===" Earth"){i++}
  if(q2==="Mercury"){i++}
  if(q3==="Mars"){i++}
  if(q4===" Venus"){i++}
  if(q5==="Venus"){i++}
  if(q6==="Eight"){i++}
  if(q7==="Mercury"){i++}
  if(q8==="Jupiter"){i++}
  if(q9==="Neptune"){i++}
  if(q10==="Mars"){i++}
  quiz.style.display="none";
  if(i<=5){
    result.textContent = ` Oops! Your result is ${i}`
  }
  else if(i<=7){
    result.textContent = `it's Good ^^ Your result is ${i} `
  }
  else{
    result.textContent = `it's awesome ^^ Your result is ${i} `
  }
}