
const answers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


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
