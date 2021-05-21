var readLineSync = require("readline-sync");
var chalk = require("chalk");
var score = 0;
var gameName= chalk.yellow.bold(" \"Ramayana Quiz\"");

var userName = readLineSync.question(chalk.yellow.bold("What is your name? "));
console.log("welcome " + userName + " to" + gameName);

var quiz = [{
  question: "Ramayana is written by?\n a) Valmiki\n b) Ved Vyas\n c) Hanuman\n",
  answer: "a",
  answer2: "Valmiki"
},
{
  question: "who is the father of Ram?\n a) Dashrath\n b) Janak\n c) Parshuram\n",
  answer: "a",
  answer2: "Dashrath"
},
{
  question: "How many brothers does Ram have?\n a) 2\n b) 3\n c) 1\n",
  answer: "b",
  answer2: "3"
},
{
  question: "where did Ram born?\n a) Mathura\n b) Ayodhya\n c) Dwarka\n",
  answer: "b",
  answer2: "Ayodhya"
},
{
  question: "who killed Ravan?\n a) Ram\n b) Laxman\n c) Hanuman\n",
  answer: "a",
  answer2: ""
}];



function quizFunction(quizQuestion, answer, answer2){
  var userAnswer = readLineSync.question(quizQuestion);

  if(userAnswer === answer || userAnswer === answer2){
    console.log("correct answer");
    score = score + 1
    console.log("current score: " + score);
  }else{
    console.log("incorrect answer");
    console.log("current score: " + score);
  }
  console.log("----------");
}

function game(){
  for(var i=0; i < quiz.length; i++){
    var currentQuestion = quiz[i];
  quizFunction(currentQuestion.question, currentQuestion.answer, currentQuestion.answer2);
}
}

function showScores() {
  console.log("Your total score is : ", score);
}

game();
showScores();






