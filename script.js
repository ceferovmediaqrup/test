const answers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const answers2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24];
const answers3 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
const answers4 = [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48];
const answers5 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
const answers6 = [6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72];
const answers7 = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84];
const answers8 = [8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96];
const answers9 = [9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99, 108];
const answers10 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];
const answers11 = [11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 121, 132];
const answers12 = [12, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132, 144];

const tableNum = parseInt(document.querySelector("#table").value);
let answers;

if (tableNum === 1) {
  answers = answers1;
} else if (tableNum === 2) {
  answers = answers2;
} else if (tableNum === 3) {
  answers = answers3;
 } else if (tableNum === 4) {
  answers = answers4;
  } else if (tableNum === 5) {
  answers = answers5;
  } else if (tableNum === 6) {
  answers = answers6;
  } else if (tableNum === 7) {
  answers = answers7;
  } else if (tableNum === 8) {
  answers = answers8;
  } else if (tableNum === 9) {
  answers = answers9;
  } else if (tableNum === 10) {
  answers = answers10;
  } else if (tableNum === 11) {
  answers = answers11;
  } else if (tableNum === 12) {
  answers = answers12;
}


function checkAnswers() {
  let numCorrect = 0;
  let numIncorrect = 0;
  let numSkipped = 0;


  const tableRows = document.querySelectorAll("tbody tr");
  tableRows.forEach((row, index) => {
    const userAnswer = parseInt(row.querySelector("input").value);

 
    if (isNaN(userAnswer)) {
      numSkipped++;
      return;
    }

  
    if (userAnswer === answers[index]) {
      row.classList.add("correct");
      numCorrect++;
    } else {
     
      row.classList.add("incorrect");
      numIncorrect++;
    }
  });

  
  document.querySelector("#correct").textContent = numCorrect;
  document.querySelector("#incorrect").textContent = numIncorrect;
  document.querySelector("#skipped").textContent = numSkipped;
}


const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  checkAnswers();
});

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}function toggleMenu() {
  var menu = document.querySelector(".navbar-menu");
  menu.classList.toggle("is-active");
}
