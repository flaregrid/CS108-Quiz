window.onload = function () {
		
		console.log("quiz javascript");
		
		var correction = document.getElementById("correction_div").getAttribute("correction_value");	
		
		if (correction === "immediate") {
			
			console.log(correction + "asdasd!!!");
			var form = document.getElementsByTagName("UL")[0];
			var list = form.getElementsByTagName("LI");
			var length = list.length;
			console.log("LENGTH" + length);
			for(var i = 0; i < length; i ++) {
				var test = list[i].getElementsByTagName("INPUT");
				console.log(test[0]);
				if(test[0]) {
					if(test[0].getAttribute("type") === "text") {
						
						test[0].addEventListener('change', function(e) {
							
							console.log("input:" + e.target.value);
							var value = e.target.value;
							var answer = e.target.parentNode.getElementsByClassName("answer")[0].getAttribute("answer");
							console.log("answer" + answer);
							
							if (answer === value) {
								var content = "Answer Correct!";
								var feedback = e.target.parentNode.getElementsByClassName("question_feedback")[0];
								feedback.innerHTML = content;
								feedback.style.color = "green";
							} else {
								var content = "Answer Incorret";
								var feedback = e.target.parentNode.getElementsByClassName("question_feedback")[0];
								feedback.innerHTML = content;
								feedback.style.color = "red";
							}
							
							
						}, false);
					} else if (test[0].getAttribute("type") === "radio") {
						for ( var n = 0; n < test.length; n++ ) 
						{ 
							test[n].onclick = function(e) {
								console.log("CLICKED" + e.target.value);
								
								var value = e.target.value;
								var answer = e.target.parentNode.parentNode.getElementsByClassName("answer")[0].getAttribute("answer");
								console.log("answer" + answer);
								
								if (answer === value) {
									var content = "Answer Correct!";
									var feedback = e.target.parentNode.parentNode.getElementsByClassName("question_feedback")[0];
									feedback.innerHTML = content;
									feedback.style.color = "green";
								} else {
									var content = "Answer Incorret";
									var feedback = e.target.parentNode.parentNode.getElementsByClassName("question_feedback")[0];
									feedback.innerHTML = content;
									feedback.style.color = "red";
								}
								
							};

						}
						
					}
				}
			}
			
		} else { // later
			
		}
		
		multipleQuestions();
		
	};
	
	var multipleQuestions = function() {
		
		var questions = document.getElementsByClassName("question_multiple_pages");
		if(questions.length) {
			var i = questions.length - 1;
			console.log(i);
			
			questions[i].style.display = "inline-block";
			var first = questions[i];
			i = i - 1;
			console.log(i);
			
			var next = document.getElementsByClassName("multiple_pages_next")[0];
			next.addEventListener("click", function(e) {
				//e.target.removeEventListener(e.type, arguments.callee);
				if (i >= 0) {
					var previous = i + 1;
					
					//
					questions[i].style.display = "inline-block";
					i = i-1;
					console.log(previous);
					questions[parseInt(previous)].style.display = "none";
				} else {
					var submit = document.getElementsByClassName("multiple_pages_submit")[0];
					submit.style.display = "inline-block";
					e.target.style.display = "none";
				}
				
			});
		}
}