//HTML to load before JQuery runs
$(document).ready(function(){
   


// Variables to hold the count of how many user scored correct, incorrect, and left unanswered
var correct = 0;
var incorrect = 0;
var unanswered = 0;




	// Hide game and score container until user clicks on start button
	$("#playGame").hide();
	$("#score").hide();


    //This is the 60 second countdown timer

		var count=60;
		var counter;

            function timer()
            {
             count=count-1;
			
			// Shows results when timer runs out
			if (count <= 0)
				{
					clearInterval(counter);
					$("#start").hide();
					$("#playGame").hide();
					$("#score").show();
					results();
					return;	
				}
				
				// Shows the countdown timer on the 
				$("#timer").html(count+ "  secs");

				

			}
			
		
			// User to click the Start button to start the game.
			$("#startBtn").on("click", function(){
				
				// Starts the timer after the user clicks the start button
				counter=setInterval(timer, 1000); 

				// Hide the start div after the user clicks the start button
				$("#start").hide();
		
				// Show the trivia game after the user clicks the start button
				$("#playGame").show();
				
				return;
		
			});

			// User clicks the done button if they are finished before the timer runs out.
			$("#doneBtn").on("click", function(){
				event.preventDefault();
				window.clearInterval(counter);
				$("#start").hide();
				$("#playGame").hide();
				$("#doneBtn").submit();
				$("#score").show();
				results();
				return;
				
			})
	
	
	
	// Validate user responses
	function results(){
		
        // Checking the values of the radio buttons selected by users
        
		var question1 = $('input:radio[name="question1"]:checked').val();
		var question2 = $('input:radio[name="question2"]:checked').val();
		var question3 = $('input:radio[name="question3"]:checked').val();
		var question4 = $('input:radio[name="question4"]:checked').val();
		var question5 = $('input:radio[name="question5"]:checked').val();
		var question6 = $('input:radio[name="question6"]:checked').val();
		var question7 = $('input:radio[name="question7"]:checked').val();
		var question8 = $('input:radio[name="question8"]:checked').val();
		var question9 = $('input:radio[name="question9"]:checked').val();
		var question10 = $('input:radio[name="question10"]:checked').val();



		// Tally up number of correct, incorrect, and unanswered questions
		if(question1 == undefined){
			unanswered++;
		}
		else if(question1 == "Grain, Hops, Yeast, Water"){
			correct++;
		}
		else{
			incorrect++;
		}


		if(question2 == undefined){
			unanswered++;
		}
		else if(question2 == "India Pale Ale"){
			correct++;
		}
		else{
			incorrect++;
		}


		if(question3 == undefined){
			unanswered++;
		}
		else if(question3 == "Molson, Inc."){
			correct++;
		}
		else{
			incorrect++;
		}


		if(question4 == undefined){
			unanswered++;
		}
		else if(question4 == "Pennsylvania"){
			correct++;
		}
		else{
			incorrect++;
		}


		if(question5 == undefined){
			unanswered++;
		}
		else if(question5 == "10"){
			correct++;
		}
		else{
			incorrect++;
		}


		if(question6 == undefined){
			unanswered++;
		}
		else if(question6 == "Belgium"){
			correct++;
		}
		else{
			incorrect++;
		}


		if(question7 == undefined){
			unanswered++;
		}
		else if(question7 == "Pabst Blue Ribbon"){
			correct++;
		}
		else{
			incorrect++;
		}


		if(question8 == undefined){
			unanswered++;
		}
		else if(question8 == "Fear of an empty glass"){
			correct++;
		}
		else{
			incorrect++;
		}


		if(question9 == undefined){
			unanswered++;
		}
		else if(question9 == "Ireland"){
			correct++;
		}
		else{
			incorrect++;
		}



		if(question10 == undefined){
			unanswered++;
		}
		else if(question10 == "Mesopotamia"){
			correct++;
		}
		else{
			incorrect++;
		}

		//Show the tally of correct, incorrect, and unanswered questions
		$("#correct").html(correct);
		$("#incorrect").html(incorrect);
		$("#unanswered").html(unanswered);
		
		//Show the container with the scores
		$("#score").show();
		
	}

	


});

    
    
   