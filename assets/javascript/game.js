function QuizQuestion(question, choices, correctAnswer){
  this.question = question;
  this.choices = choices;
  this.correctAnswer = correctAnswer;
}
  
var allQuestions = [
  new QuizQuestion("What military power was the strongest during the 100 year war?",["Power Nation", "Germany", "Fire Nation", "None of the above"],2),
  new QuizQuestion("How old was Zuko when he was banished?",["22", "13", "5", "18"],1),
  new QuizQuestion("Whom was responsilble for the attack on the Earth Kingdo during the Siege of Ba Sing Se?",[ "Prince Lu Ten", "The King", "King Tut", "The Ambassador"],0),
  new QuizQuestion("The Royal Procession is also known as:",["The Eliteist", "The Royal Guard", "Nagalads", "Imperial Firebenders"],1),
  new QuizQuestion("The Sun Warriors learned firebending from what creature?", ["Unicorns", "Nimphs","Flaming Gazelle","Dragons" ],3),
  new QuizQuestion("Hitler party which came into power in 1933 is known as",["Labor Party", "Nazi Party", "Ku-Klux-Klan","Democratic Party"],1),
  new QuizQuestion("The headquarter of International Atomic Energy Agency (IAEA) are situated at ",["Vienna", "Rome", "Geneva","Paris"],0),
  new QuizQuestion("Where is the permanent secretariat of the SAARC?",["Kathmandu", "New Delhi", "Islamabad", "Colombo"],0),
  new QuizQuestion("The Olympic Flame symbolises ",["unity among various nations of the world", "speed, perfection and strength", "sports as a means for securing harmony among nations", "continuity between the ancient and modern games"],3),
  new QuizQuestion("The number of already named bones in the human skeleton is",["200", "206", "212", "218"],1),
  /*
  new QuizQuestion("What has a tail but no body?",["A human", "A coin", "A cloud"],1),
  new QuizQuestion("What word in the English language is always spelled incorrectly?",["It's possible to spell anything right as long as you learn it", "Shakespeare", "Onomatopoeia", "Incorrectly"],2),
  new QuizQuestion("When do you stop at green and go at red?",["Watermelon!", "Traffic light!", "Garden"],0),
  new QuizQuestion("What rotates but still remains in the same place?",["Bottle (spin the bottle game)", "Clock", "Stairs"],1),
  new QuizQuestion("How can you lift an elephant with one hand?",["Truck","Use both hands!", "Use a lever", "There is no such thing"],2)
*/  
];

var currentquestion = 0;
var correctAnswers = 0;

function setupOptions() {
  $('#question').html(parseInt(currentquestion) + 1 + ". " + allQuestions[currentquestion].question);
  var options = allQuestions[currentquestion].choices;
  var formHtml = '';
  for (var i = 0; i < options.length; i++) {
    formHtml += '<div><input type="radio" name="option" value="' + i + '" class="options"><label for="option' + i + '">' + options[i] + '</label></div><br/>';
  }
  $('#form').html(formHtml);
  $(".options:eq(0)").prop('checked', true);
}

function checkAns() {
  if ($("input[name=option]:checked").val() == allQuestions[currentquestion].correctAnswer) {
    correctAnswers++;
  }
}

$(document).ready(function(){
  
  var $content = $(".content");
  var $start = $("#start");
  var $progressbar = $("#progressbar");
  var $next = $("#next");
  var $result = $("#result");
  
  $content.hide();
  $start.click(function() {
      $(this).hide();
    });


  setupOptions();

  $next.click(function(){
      event.preventDefault();
      checkAns();
      currentquestion++;
      $(function() {
          $progressbar.progressbar({
              value: currentquestion
          });
        });
      if(currentquestion<allQuestions.length){
        setupOptions();
        if(currentquestion==allQuestions.length-1){
          $next.html("Submit");
          $next.click(function(){
            $content.hide();
            $result.html("You correctly answered " + correctAnswers + " out of " + currentquestion + " questions! ").hide();
          });

        }
        
      };
  }); 
});


// window.onload = function() {

//   //  Click events are done for us:
//   $("#lap").click(stopwatch.recordLap);
//   $("#stop").click(stopwatch.stop);
//   $("#reset").click(stopwatch.reset);
                             
// };

// var intervalId;


// //  Our stopwatch object.
// var stopwatch = {

//   time: 15,

//   reset: function() {
//     stopwatch.time = 15;
//     $('#display').html("15");
//     //  TODO: Change the "display" div to "00:00."
//     $('#laps').html("");
//   },

//   start: function() {
//       //  TODO: Use setInterval to start the count here and set the clock to running.
//       if (!clockRunning) {
//           intervalId = setInterval(stopwatch.count, 10);
//           clockRunning = true;
//       }


//   count: function() {
//     //  TODO: increment time by 1, remember we cant use "this" here.
//     stopwatch.time--;
//     //  TODO: Get the current time, pass that into the stopwatch.timeConverter function,
//     //        and save the result in a variable.
//    $('#display').html(stopwatch.time); 
//     //  TODO: Use the variable you just created to show the converted time in the "display" div.

//   },

//   //  THIS FUNCTION IS DONE FOR US!
//   //  We do not need to touch it.

// };

