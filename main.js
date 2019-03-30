

document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
	e.preventDefault();

	var name = getValues('name');
	var slide = getValues('slide');
	var message = getValues('message');
	var track = getValues('track');

	send (name,slide,message,track);

		document.getElementById('contactForm').reset();	
}

function getValues(id){return document.getElementById(id).value;}

var feedbacks = firebase.database().ref('feedbacks');

function send (name,slide,message,track){
	var feedback = feedbacks.push();
	feedback.set({
		student: name,
		slide: slide,
		msata: message,
		track: track
	});
}
