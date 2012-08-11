$(document).ready(function() {
						   
//////////////////// field NAME //////////////////////////////////////
var nameValue = $('#name_f').attr('value');     // value 'Your name'

$('#name_f') 
	.focus(function(){
		if ($(this).val() == nameValue) {
			$(this).val('');
		}
	})
	.blur(function() {
		var userName = $(this).val();  // name, which entered user
		
		if (userName == '') {
			$(this).val(nameValue);
		}
		else {
			$(this).css('border-left', '2px solid green');
		}
	});
						   
//////////////////// field E-MAIL //////////////////////////////////////
var emailValue = $('#email_f').attr('value');  // value 'Your email'

var regV = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;

$('#email_f')
	.focus(function() {
		if ($(this).val() == emailValue) {
			$(this).val('');
		}
	})
	.blur(function() {
	
		var userEmail = $(this).val();      // e-mail, which entered user
		
		if (userEmail == '') {
			$(this).val(emailValue);
		}
		else {
			if ($(this).val().search(regV) == -1) {
				$(this).val(emailValue);
				$(this).css('border-left', '2px solid red');
			}
			else {
				$(this).css('border-left', '2px solid green');
			}
		}
	});
	
/////////////// field PHONE ///////////////////////////
var phoneValue = $('#phone_f').attr('value');  // value 'Your phone'

$('#phone_f')
	.focus(function() {
		if ($(this).val() == phoneValue) {
			$(this).val('');
		}
	})
	.blur(function() {
		var userPhone = $(this).val(); // phone, which entered user
		
		if (userPhone == '') {
			$(this).val(phoneValue);
		}
		else {
			if (isNaN($(this).val())) {
				$(this).val(phoneValue);
				$(this).css('border-left', '2px solid red');
			}
			else {
				$(this).css('border-left', '2px solid green');
			}
		}
	});
	
//////////////// field MESSAGE /////////////////////////////
var messageValue = $('#message_f').attr('value');  // value 'Your message'

$('#message_f')
	.focus(function() {
		if ($(this).val() == messageValue) {
			$(this).val('');
		}
	})
	.blur(function() {
		var userMessage = $(this).val();  //message, which entered user
		
		if (userMessage == '') {
			$(this).val(messageValue);
		}
		else {
			$(this).css('border-left', '2px solid green');
		}
	});

//////////////// button //////////////////////////////////

$('#form')
	.submit(function(eventObject) {
		if (messageValue == $('#message_f').val() || nameValue == $('#name_f').val() || emailValue == $('#email_f').val() || phoneValue == $('#phone_f').val() ) {
			eventObject.preventDefault();
			alert("Заполнены не все поля!");
		}
	});

})  // end ready
