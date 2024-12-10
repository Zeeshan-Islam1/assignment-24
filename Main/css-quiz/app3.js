var questions = [
    {
      question: "What does CSS stand for?",
      option1: "CANDLE Style Sheet",
      option2: "Canada Style Sheets",
      option3: "Cascading Style Sheet",
      correctAnswer: "Cascading Style Sheet",
    },
    {
      question: "What is the correct HTML for referring to an external style sheet?",
      option1: "The <head> section",
      option2: "The <body> section",
      option3: "Both the <head> and <body> section",
      correctAnswer: "Both the <head> and <body> section",
    },
    {
      question: "The external CSS file must contain the <style> tag.",
      option1: "The <head> section",
      option2: "The <body> section",
      option3: "Both the <head> and <body> section",
      correctAnswer: "Both the <head> and <body> section",
    },
    {
      question: "Where in an HTML document is the correct place to refer to an external style sheet?",
      option1: "In the <head> section",
      option2: "In the <body> section",
      option3: "Both the <head> and <body> section",
      correctAnswer: "Both the <head> and <body> section",
    },
    {
      question: "How do you add a background color for all <h1> elements?",
      option1: "h1 {background-color: red;}",
      option2: "All <h1> elements {background-color: red;}",
      option3: "h1.all {background-color: red;}",
      correctAnswer: "h1 {background-color: red;}",
    },
    {
      question: "How do you add a background color for all <p> elements?",
      option1: "p {background-color: red;}",
      option2: "All <p> elements {background-color: red;}",
      option3: "p.all {background-color: red;}",
      correctAnswer: "p {background-color: red;}",
    },
    {
      question: "grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));",
      option1: "grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));",
      option2: "grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));",
      option3: "grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));",
      correctAnswer: "grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));",
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      option1: "style", 
      option2: "styles",
      option3: "stylesheets",
      correctAnswer: "style",
    },
    {
      question: "Which is the correct CSS syntax?",
      option1: "body {color: black;}",
      option2: "{body color: black;}",
      option3: "{body: color black;}",
      correctAnswer: "body {color: black;}",
    },
    {
      question: "How do you insert a comment in a CSS file?",
      option1: "/* this is a comment */",
      option2: "// this is a comment",
      option3: "// this is a comment",
      correctAnswer: "/* this is a comment */",
    },
  ];
  
  
  var ques = document.getElementById("question");
  var option1 = document.getElementById("option1");
  var option2 = document.getElementById("option2");
  var option3 = document.getElementById("option3");
  var button = document.getElementById("btn");
  var index = 0;
  var score = 0;
  
  function nextQuestion() {
    var options = document.getElementsByName("answer");
    for (var i = 0; i < options.length; i++) {
      if (options[i].checked) {
        var selected = options[i].value;
        var userAnswer = questions[index - 1][`option${selected}`];
        var correctAns = questions[index - 1].correctAnswer;
        if (userAnswer === correctAns) {
          score++;
        }
        options[i].checked = false;
      }
    }
  
    if (index >= questions.length) {
      Swal.fire({
        title: "Sweet!",
        imageUrl: "img/well-done.png",
        text: "Outcome Revealed: Results Inside",
        title: `${(score / questions.length) * 100}%`,
        showConfirmButton: false,
        allowOutsideClick: false,
        timer:4000,
      });
      setInterval(() => {
        window.location.href = "../index.html";
      }, 3000);
    } else {
      ques.innerText = questions[index].question;
      option1.innerText = questions[index].option1;
      option2.innerText = questions[index].option2;
      option3.innerText = questions[index].option3;
      index++;
      button.disabled = true;
      sec = 25;
    }
  }
  
  function enableBtn() {
    button.disabled = false;
  }
  
  
  var sec = 20;
  
  var timer = document.getElementById("timer");
  var interval = setInterval(function () {
    timer.innerHTML = `${'Next Question in : ' + sec}`;
    sec--;
  
    if (sec < 0) {
      if (index >= questions.length) {
        clearInterval(interval);
      } else {
        nextQuestion();
      }
      sec = 20;
    }
  }, 1000);
  nextQuestion();