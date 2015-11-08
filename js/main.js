function askQuestions(){

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');

	var fullName= firstName + ' ' + lastName;

	console.log(fullName);

	var userAge = prompt('How old are you?');

	userAge = parseInt(userAge);

	if (userAge >= 18) {
		 console.log('User is an adult.');
	} else if (userAge >=13){
		console.log('User is a teenager.');
	} else {
	//under 13 
	 console.log('Go away,child!')
	}

	$('h2').text('Hello ' + fullName);


	if (firstName == 'General' && lastName != 'Assembley') {

		console.log('Greetings,General!');
	}

	var faveColor = prompt('What is your favourite color?')

	if (faveColor == 'red' ||
		faveColor == 'blue' ||
		faveColor== 'green ' ||
		faveColor== 'yello ') {
		$ ('h1').css('color', faveColor);
	}

}









//when the page has loaded
$(function() {

	$('img').on('click',askQuestions);

     //hide all the content 
     $('h3').next().hide(); //next will find the content after the headline

     // when the user user clicks an h3
     $('h3').on('click',function() {

	     // toggle the next element
	     $(this).next().slideToggle(5000); //need to add brackets in order for the computer to understand its doing a fucntion



	  });

});