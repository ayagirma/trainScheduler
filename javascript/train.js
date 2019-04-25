 
 $(document).ready(function(){

 // Initialize Firebase
  var config = {
 
    authDomain: "train-scheduler-43e2b.firebaseapp.com",
    databaseURL: "https://train-scheduler-43e2b.firebaseio.com",
    projectId: "train-scheduler-43e2b",
    storageBucket: "train-scheduler-43e2b.appspot.com",
    messagingSenderId: "261666363314"
  };

  firebase.initializeApp(config);
  var database = firebase.database();

 // variable setup

 var trainName="";
 var distination="";
 //var frequency= 0;
 var nextArrival="";
 //var minutesAway= 0;

 // $(document.ready(function() {

 //jquery on click button will capture at clicked this will grab
//the user input and send to firebase. everytime clicked the add 
//user going to grab the value and stored in our form and place them 
//into the variable we created.

$("#addUser").on('click', function(event){

     event.preventDefault();
   // grabs user input
    trainName = $("#nameInput").val().trim();
    distination = $("#distinationInput").val().trim();
    frequency = $("#frequencyInput").val().trim();
    nextArrival = $("#arrivalInput").val().trim();
    minutesAway = $("#minutesAwayInput").val().trim();
// upload train schedule to the database
    var trainSchedule = {
  		name: trainName,
  		distination: distination,
  		frequency: frequency,
  		arrival: nextArrival,
  		minutes: minutesAway,
  		dateAdded:firebase.database.ServerValue.TIMESTAMP

      };

    

      // uddate TrainSchedule to the database
      database.ref().push(trainSchedule);


        // clear all of the text-boxes
        $("#nameInput").val("");
        $("#distinationInput").val("")
        $("#frequencyInput").val("");
        $("#arrivalInput").val("");
         $("#minutesAwayInput").val("");

  })

// updated the firebase
firebase.database().ref().on("child_added", function(snapshot){
	$(".well").append("<p>"+snapshot.val().name+"<p>");
	$(".well").append("<p>"+snapshot.val().name+"<p>");
	$(".well").append("<p>"+snapshot.val().name+"<p>");
	$(".well").append("<p>"+snapshot.val().name+"<p>");
	$(".well").append("<p>"+snapshot.val().name+"<p>");
	$(".well").append("hr");
})
// using military time format
//var firstTrainTime = moment.duration(123, "minutes").format("hh:mm");

// predicting the next time arrival
//var nextArrival = firstTrainTime + moment.duration(frequency).minutes();

// calsulation of the Next train time
// var minutesAway = firstTrainTime + nextArrival;
// console.log(minutesAway);
// using firbase litsner, snapshot that is response from server.
firebase.database().ref().orderByChild('dateAdded').limitToLast(1).on("child_added", function(snapshot){
  
  $("#nameDisplay").html(snapshot.val().name);
  $("#distinationDisplay").html(snapshot.val().name);
  $("#frequencyDisplay").html(snapshot.val().name);
  $("#arrivalDisplay").html(snapshot.val().name);
  $("#minutesDisplay").html(snapshot.val().name);
console.log('what is this do');
// add each train's data into the table
$("#train-time-table > tbody").append("<tr><td>" + trainName +"<tr><td>"+distination + "<tr><td>" +
frequency + "<tr><td>" + nextArrival + "<tr><td>" + minutesAway + "<tr><td>" );
})
 });

// // using military time format
// var firstTrainTime = moment.duration().hours();
// var nextArrival = frequency + moment.duration().minutes();

// // calsulation of the Next train time
// var minutesAway = firstTrainTime + nextArrival;
// console.log(minutesAway);
