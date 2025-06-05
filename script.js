
let students = [];

function addStudent() {
  const name = document.getElementById('studentName').value.trim();
  const score = parseInt(document.getElementById('studentScore').value.trim());

  if (name && !isNaN(score)) {
    students.push({ name, score });
    display("Added: " + name + " (" + score + ")");
  } else {
    display("Please enter both name and score.");
  }
}


function linearSearch() {
  const name = prompt("Enter name to search:");
  for (let i = 0; i < students.length; i++) {
    if (students[i].name.toLowerCase() === name.toLowerCase()) {
      return display("Found at position " + i + ": " + students[i].name);
    }
  }
  display("Name not found.");
}


function binarySearch() {
  let sorted = [...students].sort((a, b) => a.score - b.score);
  const score = parseInt(prompt("Enter score to search:"));
  let left = 0, right = sorted.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (sorted[mid].score === score) {
      return display("Score found: " + sorted[mid].name + " (" + sorted[mid].score + ")");
    }
    if (sorted[mid].score < score) left = mid + 1;
    else right = mid - 1;
  }
  display("Score not found.");
}


function sortNames() {
  let arr = [...students];
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].name.toLowerCase() < arr[min].name.toLowerCase()) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  display("Sorted Names:\n" + arr.map(s => s.name).join(", "));
}


function reverseList() {
  let stack = [];
  for (let i = 0; i < students.length; i++) {
    stack.push(students[i].name);
  }
  let reversed = [];
  while (stack.length > 0) {
    reversed.push(stack.pop());
  }
  display("Reversed Names:\n" + reversed.join(", "));
}

function display(message) {
  document.getElementById("output").innerText = message;
}
