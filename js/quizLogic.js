var uInputArea = document.getElementById("uInputArea");
var questionText = document.getElementById("questionText");
var questionImg = document.getElementById("questionImg");
var answerImg = document.getElementById("answerImg");
var answer = document.getElementById("answer");

var index = 0;
var userTags = [];
var currentQuiz = java1v3;
setQuiz();
/*
  updates the html elements in the page to match question object at current quiz index
*/
function showQuestion(){

  let question = currentQuiz[index];

  document.getElementById("completed").hidden = true;
  questionText.innerText = `${index + 1}. `+question.Question;
  uInputArea.innerHTML = "";
  uInputArea.className = "";
  // if question has an image include it
  if(question.questionImg !== undefined){
    questionImg.src = "img/" + question.questionImg;
  }else{
    questionImg.src = "";
  }

  answerImg.src = "";
  // populating user input area with appropriate question type inputs
  if(question.type === "mcq"){
    for (let i = 0; i < question.options.length;i++){
      let questionOption = question.options[i].trim();
      questionOption = questionOption.replace("<","&lt;");
      questionOption = questionOption.replace(">","&gt;");
      uInputArea.innerHTML += `<input type="radio" name="option" value="${questionOption}"> ${questionOption}<br>`
    }
  }else if(question.type.toLowerCase() === "true/false"){
      uInputArea.className = "trueFalse";
    uInputArea.innerHTML = `<input type="radio" name="option" value="True"> True<br><input type="radio" name="option" value="False"> False<br>`;
  }else if(question.type === "superMCQ"){
    uInputArea.className = "text-center"
    uInputArea.innerHTML = "";
    for(let i = 0; i < question.options.length;i++){
      uInputArea.innerHTML+= `${question.options[i].trim()}<br><input type="text" name="answer"><br>`;
    }
  }else if(question.type === "checkboxQ"){
    uInputArea.innerHTML = "";
    for (let i = 0; i < question.options.length;i++){
      uInputArea.innerHTML += `<input type="checkbox" name="option" value="${question.options[i]}"> ${question.options[i].trim()}<br>`
    }
  }else if(question.type === "blank"){
    uInputArea.className = "text-center"
    uInputArea.innerHTML = `<input type="text" name="answer"><br>`;
  }else if(question.type === "shortA"){
    uInputArea.className = "text-center"
    uInputArea.innerHTML = `<textarea name="answer" rows="4" cols="40"></textarea><br>`;
  }
}
// when user presses submit button
function onSubmit(){
  let question = currentQuiz[index];

  if(question.type === "mcq"){
    gradeRadio(question);
  }else if(question.type === "True/False"){
    gradeRadio(question);
  }else if(question.type === "superMCQ"){
    gradeSuperMCQ(question);
  }else if(question.type === "checkboxQ"){
    gradeCheckboxes(question);
  }else if(question.type === "blank"){
    gradeBlank(question);
  }else if(question.type === "shortA"){
    gradeShortA(question);
  }
  if(question.answerImg !== undefined && question.answerImg !== null){
    answerImg.src = "img/" + question.answerImg;
  }else{
    answerImg.src = "";
  }
}

function gradeShortA(question){
  let userVal = document.getElementsByName("answer")[0];
  if(userVal.value.toLowerCase() === question.answer.toLowerCase()){
    answer.innerText = "Correct!";
  }else{
    answer.innerText = `The suggested answer is: ${question.answer}`;
  }
}

function gradeBlank(question){
  let userVal = document.getElementsByName("answer")[0];
  if(userVal.value.toLowerCase() === question.answer.toLowerCase()){
    answer.innerText = "Correct!";
  }else{
    answer.innerText = `The suggested answer is: ${question.answer}`;
  }
}
// checks users answer, if correct tell them correct, if incorrect show them the answer
function gradeSuperMCQ(question){
  let userVals = document.getElementsByName("answer");
  let correctAnswers = 0;
  // checking how many questions the user got right
  for(let i = 0; i < userVals.length; i++){
    if(userVals[i].value === question.answer[i]){
      correctAnswers++;
    }
  }
  // deciding what to display based on correct answers
  if(correctAnswers === userVals.length){
    answer.innerText = "Correct!";
  }else if(correctAnswers > 0){
    answer.innerText= "You didn't get everything right, here are the answers:\n"
    for(let i = 0; i < question.answer.length;i++){
      answer.innerText+=`${question.options[i]}: ${question.answer[i]}\n`;
    }
  }else{
      answer.innerText= "The suggested answer is:\n"
    for(let i = 0; i < question.answer.length;i++){
      answer.innerText+=`${question.options[i]}: ${question.answer[i]}\n`;
    }
  }
}
// grades multiple choice questions which use radio buttons
function gradeRadio(question){
  let userVal = getRadioValue();
  if(userVal === question.answer){
    answer.innerText = "Correct!";
  }else{
    answer.innerText = `Incorrect! The answer is: ${question.answer}`;
  }
}
// helper function to get the currently selected radio button value
function getRadioValue(){
  let radios = document.getElementsByName('option');
  // checks which radio button is checked
  for (let i = 0, length = radios.length; i < length; i++)
  {
    if (radios[i].checked)
    {
      return radios[i].value.trim();
    }
  }
  // return null if no value is found
  return null;
}
// checks users answer, if correct tell them correct, if incorrect show them the answer
function gradeCheckboxes(question){
  let userVal = getCheckedValues();

  let correctAnswers = 0;
  for(let i = 0; i < userVal.length;i++){
    if(userVal[i] === question.answer[i]){
      correctAnswers++;
    }
  }

  if(correctAnswers === question.answer.length){
    answer.innerText = "Correct!";
  }else{

      answer.innerText= "Incorrect!\nThe answers are: "
      for(let i = 0; i < question.answer.length;i++){
        if(question.answer[i] === "checked"){
          answer.innerText+=`${question.options[i]}\n`;
        }
      }
    }
}

// helper function to get the values of all checkboxes, returns an array of strings with values "checked" or "unchecked" for each option
function getCheckedValues(){
  let checkboxes = document.getElementsByName('option');
  // checks which radio button is checked
  let userValues = [];
  for (let i = 0, length = checkboxes.length; i < length; i++)
  {
    if (checkboxes[i].checked)
    {
      userValues.push("checked");
    }else{
      userValues.push("unchecked");
    }
  }
  // return null if no value is found
  return userValues;
}
function setQuiz(){
  let url = window.location.href;
  if(url.includes("quiz")){
    let quizOption = url.split("=")[1];
    if(quizOption === "java1f"){
      currentQuiz = java1v3
    }else if(quizOption === "java1m"){
      currentQuiz = java1v1;
    }else if(quizOption === "java2f"){
      currentQuiz = quiz4;
    }else if(quizOption === "java2m"){
      currentQuiz = java2V1;
    }
  }
}

// gets url parameters, populates an array of tags
function getQuizInfoFromUrl(url){
  let whichQuiz = "";

  let parameters = url.split("?")[1];
  if (parameters == undefined){
    createQuizFromTags();
    return 1;
  }
  let args = parameters.split("&");
  for(let i = 0; i < args.length; i++){
    let key = args[i].split("=")[0];
    let value = args[i].split("=")[1];
    if(key === "course"){
      whichQuiz = value;
    }else if(key === "filters"){
      userTags.push(value.charAt(0).toUpperCase() + value.slice(1));
    }

  }
  console.log(userTags);
  createQuizFromTags();
}
// creates an array of questions based on the array of user tags
function createQuizFromTags(){
  let newQuiz = [];
  if(userTags.length === 0){
    showQuestion();
    return 1;
  }
  for (let i = 0; i < currentQuiz.length; i++ ){
    if ('tags' in currentQuiz[i]){
      for(let k = 0; k < userTags.length;k++){
        if(currentQuiz[i].tags.includes(userTags[k])){
          newQuiz.push(currentQuiz[i]);
          break;
        }
      }
    }
  }
  currentQuiz = newQuiz;
  showQuestion();
}
// all of the functionality of the next button
function onNext(){
  if(index < currentQuiz.length -1){
    index++;
    showQuestion();
    answer.innerText = "";
  }else{
    document.getElementById("completed").hidden = false;
  }
}
// all of the functionality of the previous button
function hideComplete(){
  document.getElementById("completed").hidden = true;
}
function onPrev(){
  if(index > 0){
    index--;
    showQuestion();
    answer.innerText = "";
  }
}
// adds keyboard listener allowing users to use left and right arrowkeys to navigate quiz
document.addEventListener("keydown", function (event){
  // left arrow key pressed
  if(event.keyCode === 37){
    onPrev();
  }
  // right arrow key pressed
  else if(event.keyCode === 39){
    onNext();
  }
});
getQuizInfoFromUrl(window.location.href);
