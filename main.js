var todayDate = document.getElementById("todaysdate");
var todoButton = document.getElementById("whattodo");

// add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);

// create a new Date object
var d = new Date();

// call the displayDate() function
displayDate();

function displayDate() {
  todayDate.innerHTML = d.toDateString();
}

function displayActivity() {
  // todo: find out the day of the week.
  var dayOfWeek = d.getDay();

  /* todo: set a variable, called youShould, with a different
     string based on what day of the week it is. */
  var youShould;

  switch (dayOfWeek) {
    case 0:
      youShould = "Take it easy. You've earned it!";
      break;
    case 1:
      youShould = "Get to work on time!";
      break;
    case 2:
      youShould = "Have tacos for dinner, it is Tuesday after all!";
      break;
    case 3:
      youShould = "It's laundry day. Wash, dry and fold your clothes.";
      break;
    case 4:
      youShould = "Hit the books to study JavaScript. Learning is fun.";
      break;
    case 5:
      youShould = "Let's go out dancing tonight. Friday Party Day!";
      break;
    case 6:
      youShould = "Write your plans for next week in your planner.";
      break;
    default:
      youShould = "Hmm. Something went wrong here!";
      break;
  }
  // todo: output the value of youShould into the thingToDo div
  document.getElementById("thingToDo").innerHTML = youShould;
}
