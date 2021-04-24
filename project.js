function check(){
  let i=0
  let q1= document.quiz.question1.value;
  let q2= document.quiz.question2.value;
  let q3= document.quiz.question3.value;
  let q4= document.quiz.question4.value;
  let q5= document.quiz.question5.value;
  let result =document.getElementById("result");
  let quiz = document.getElementById("quiz")
  if(q1===" Earth"){i++}
  if(q2==="Mercury"){i++}
  if(q3==="Mars"){i++}
  if(q4===" Venus"){i++}
  if(q5==="Venus"){i++}
  quiz.style.display="none";
  if(i<=3){
    result.textContent = `Your result is ${i}`
  }else{
    result.textContent = `Your result is ${i} and its awesome`
  }
}