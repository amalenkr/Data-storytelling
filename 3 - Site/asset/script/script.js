$(document).ready(function() {
	$(".fadein").delay(1000).animate({'opacity':'1'}, 1500);
});

$(document).ready(function() {
	$('.scroll').on('click', function() {
		var page = $(this).attr('href');
		var speed = 1000; 
		$('html, body').animate( { scrollTop: $(page).offset().top }, speed );		return false;
	});
});

document.addEventListener('DOMContentLoaded', function () {
	$('.heart').on('click', function () {
		$(this)
			.find('[data-fa-i2svg]')
			.toggleClass('red');
	});
});

/**
 * Resets the rating star colors when not hovered anymore.
 */
function resetRatingStars() {
  star_elements.each(function(i, elem) {
    $(elem).removeClass('yellow').removeClass('gray').addClass(current_star_statusses[i] ? 'yellow' : 'gray');
  });
}

/***************************/
/***************************/

function recap() {
	var nom = document.forms["newsletter"]["nom"].value;
	var prenom = document.forms["newsletter"]["prenom"].value;
	var email = document.forms["newsletter"]["mail"].value;
	var datenaiss = document.forms["newsletter"]["naiss"].value;
	var sexe = document.forms["newsletter"]["sexe"].value;
if (sexe == 1) {
	var verbe = "né";
	var verbe2 = "inscrit";
}
else if (sexe == 2) {
	var verbe = "née";
	var verbe2 = "inscrite";
}
else if (sexe == 0) {
	var verbe = "né.e";
	var verbe2 = "inscrit.e";
}
	alert(nom + " " + prenom + ", " + verbe + " le " + datenaiss +", est bien " + verbe2 + " à la newsletter.\nVous la recevrez à l'adresse suivante : " + email + ".\nMerci pour votre confiance et à bientôt");
};

document.addEventListener('DOMContentLoaded', function () {
	$('.heart').on('click', function () {
		$('.fav').toggleClass('fav2');
	});
});

/***************************/
/***************************/

/*jQuery(document).ready(function($){
	$back_to_top = $('.cd-top');
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({scrollTop: 0 ,}, 700);
	});
});

var myVideo = document.getElementById("video1"); 
function muted() { 
	if (myVideo.muted == true) myVideo.muted = false; 
	else myVideo.muted = true;
}

function pause() { 
	if (myVideo.paused) myVideo.play(); 
	else myVideo.pause();
}
*/