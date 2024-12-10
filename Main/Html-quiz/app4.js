var questions = [
    {
      question: "What does HTML stand for?",
      option1: "Hypertext Markup Language",
      option2: "Hyper Text Markup Language",
      option3: "Home Tool Markup Language",
      correctAnswer: "Hypertext Markup Language",
    },
    {
      question: "Which character is used to indicate an end tag?",
      option1: ">",
      option2: "/",
      option3: "*",
      correctAnswer: ">",

      
    },
    {
      question: "Where in an HTML document is the correct place to refer to an external script?",
      option1: "In the <head> section",
      option2: "In the <body> section",
      option3: "Both the <head> and <body> section",
      correctAnswer: "Both the <head> and <body> section",
    },
    {
      question: "How can you open a link in a new tab/browser window?",
      option1: "target=\"_blank\"",
      option2: "target=\"new\"",
      option3: "target=\"newtab\"",
      correctAnswer: "target=\"_blank\"",
    },
    {
      question: "Which of these elements are all <table> elements?",
      option1: "table, tr, td",
      option2: "table, tr, th",
      option3: "table, td, th",
      correctAnswer: "table, tr, td",
    },
    {
      question: "Inline elements are normally displayed without starting a new line.",
      option1: "True",
      option2: "False",
      option3: "None of the above",
      correctAnswer: "False",
    },
    {
      question: "How can you make a numbered list?",
      option1: "ol",
      option2: "ul",
      option3: "dl",
      correctAnswer: "ol",
    },
    {
      question: "How can you make a bulleted list?",
      option1: "ol",
      option2: "ul",
      option3: "dl",
      correctAnswer: "ul",
    },
    {
      question: "An <iframe> is used to display a web page within a web page",
      option1: "True",
      option2: "False",
      option3: "None of the above", 
      correctAnswer: "True",
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