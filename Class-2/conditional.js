let a = prompt("Enter any Number");
if (a % 7 == 0) {
  alert(a + "is multiple of 7");
} else {
  alert(a + "is not multiple of 7");
}

let marks = prompt("Enter you Marks");

if (marks < 40) {
  alert("Bhojey is Gay");
} else if (marks >= 40 && marks < 50) {
  alert("You're grade is C");
} else if (marks >= 50 && marks < 60) {
  alert("Your grade is C+");
} else if (marks >= 60 && marks < 70) {
  alert("Your grade is B");
} else if (marks >= 70 && marks < 80) {
  alert("Your grade is B+");
} else if (marks >= 80 && marks < 90) {
  alert("Your grade is A");
} else if (marks >= 90 && marks < 100) {
  alert("Your grade is A+");
} else {
  alert("Invalid Input");
}
