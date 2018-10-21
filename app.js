window.addEventListener("load", startup, false);

function startup() {

//first calculator
	$("#calculate1").click(function(event) {
//check if there's enough input
	if($("#wholeForCalc1").val() === "" || $("#percentForCalc1").val() === "") {
		$("#displayResault1").text("לא הוזנו מספיק נתונים.")
	}
		else {
//run calculation
	var myResault1 = $("#wholeForCalc1").val() * [100 + parseInt($("#percentForCalc1").val()) ] /100;
	$("#displayResault1").html(' המחיר בתוספת מע"מ הוא: ' + myResault1.toFixed(2)+ ' ש"ח.' )}
	});

// //second calculator
// 	$("#calculate2").click(function(event) {
// //check if there's enough input
// 	if($("#partForCalc2").val() === "" || $("#wholeForCalc2").val() === "") {
// 		$("#displayResault2").text("Not enough input.")
// 	}
// 		else {
// //run calculation	
// 	var myResault2 = $("#partForCalc2").val() *100 / $("#wholeForCalc2").val();
// 	$("#displayResault2").html("Resault: The percentage is " + myResault2 + "%." + "</br>"  + $("#partForCalc2").val() + " is " + myResault2 + "% of " + $("#wholeForCalc2").val()+". ")}
// 	});

//third calculator
	$("#calculate3").click(function(event) {
//check if there's enough input
	if($("#partForCalc3").val() === "" || $("#percentForCalc3").val() === "") {
		$("#displayResault3").text("לא הוזנו מספיק נתונים.")
	}
		else {
//run calculation
	var myResault3 = $("#partForCalc3").val() *100 / [100 + parseInt($("#percentForCalc3").val()) ];
	$("#displayResault3").html('המחיר לא כולל מע"מ הוא: ' + myResault3.toFixed(2) + ' ש"ח.')}
	});
}

