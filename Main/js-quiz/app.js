var questions = [
    {
      question: "What does js stand for?",
      option1: "JavaScript",
      option2: "Java",
      option3: "Jquery",
      correctAnswer: "JavaScript",
    },
    {
      question: "Where is the correct place to insert a JavaScript?",
      option1: "The <head> section",
      option2: "The <body> section",
      option3: "Both the <head> and <body> section",
      correctAnswer: "Both the <head> and <body> section",
    },
    {
      question: "The external JavaScript file must contain the <script> tag.",
      option1: "The <head> section",
      option2: "The <body> section",
      option3: "Both the <head> and <body> section",
      correctAnswer: "Both the <head> and <body> section",
    },
    {
      question: "How do you write \"Hello World\" in an alert box?",
      option1: "alert(\"Hello World\")",
      option2: "msgBox(\"Hello World\")",
      option3: "msg(\"Hello World\")",
      correctAnswer: "alert(\"Hello World\")",
    },
    {
      question: "How do you create a function in JavaScript?",
      option1: "function myFunction()",
      option2: "function: myFunction()",
      option3: "function = myFunction()",
      correctAnswer: "function myFunction()",
    },
    {
      question: "How do you call a function named \"myFunction\"?",
      option1: "myFunction()",
      option2: "call myFunction()",
      option3: "call function myFunction()",
      correctAnswer: "myFunction()",
    },
    {
      question: "How to write an IF statement in JavaScript?",
      option1: "if (i == 5)",
      option2: "if i = 5 then",
      option3: "if i == 5 then",
      correctAnswer: "if (i == 5)",
    },
    {
      question: "How to write an IF statement for executing some code if \"i\" is NOT equal to 5?",
      option1: "if (i != 5)",
      option2: "if i =! 5 then",
      option3: "if i <> 5 then",
      correctAnswer: "if (i != 5)",
    },
    {
      question: "How does a WHILE loop start?",
      option1: "while (i <= 10)",
      option2: "while i = 1 to 10",
      option3: "while (i = 1; i <= 10)",
      correctAnswer: "while (i = 1; i <= 10)",
    },
    {
      question: "How does a FOR loop start?",    
      option1: "for (i = 0; i <= 5)",
      option2: "for (i = 0; i <= 5; i++)",
      option3: "for i = 1 to 5",
      correctAnswer: "for (i = 0; i <= 5; i++)",
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
    timer.innerHTML = `${'Timer  : ' + sec}`;
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