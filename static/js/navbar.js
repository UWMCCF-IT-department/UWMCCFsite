$(document).ready(function(){
	$(window).bind('scroll', function() {
		var navHeight = $("#title").height();
        ($(window).scrollTop() > navHeight) ? $('#menu').addClass('goToTop') : $('#menu').removeClass('goToTop');
    });
});

window.addEventListener('load', function() {
	var resource_button = document.getElementById('resource_button');
	var outreach_button = document.getElementById('outreach_button');
	var bible_button = document.getElementById('bible_button');
	var specialeventplanning_button = document.getElementById('specialeventplanning_button');
	var meetingminute_button = document.getElementById('meetingminute_button');
	
	var resource_home = document.getElementById('resource_home');
	var resource_outreach = document.getElementById('resource_outreach');
	var resource_bible = document.getElementById('resource_bible');
	var resource_specialeventplanning = document.getElementById('resource_specialeventplanning');
	var resource_meetingminute = document.getElementById('resource_meetingminute');
	
	console.log("here");
	resource_button.addEventListener('click', function() {
		resource_home.className = 'col-sm-8 col-sm-offset-2 active';
		resource_outreach.className = 'hidden';
		resource_specialeventplanning.className = 'hidden';
		resource_bible.className = 'hidden';
		resource_meetingminute.className = 'hidden';
	});
	
	outreach_button.addEventListener('click', function() {
		resource_home.className = 'hidden';
		resource_outreach.className = 'col-sm-8 col-sm-offset-2 active';
		resource_specialeventplanning.className = 'hidden';
		resource_bible.className = 'hidden';
		resource_meetingminute.className = 'hidden';
	});
	
	bible_button.addEventListener('click', function() {
		resource_home.className = 'hidden';
		resource_outreach.className = 'hidden';
		resource_specialeventplanning.className = 'col-sm-8 col-sm-offset-2 active';
		resource_bible.className = 'hidden';
		resource_meetingminute.className = 'hidden';
	});
	
	specialeventplanning_button.addEventListener('click', function() {
		resource_home.className = 'hidden';
		resource_outreach.className = 'hidden';
		resource_specialeventplanning.className = 'hidden';
		resource_bible.className = 'col-sm-8 col-sm-offset-2 active';
		resource_meetingminute.className = 'hidden';
	});
	
	meetingminute_button.addEventListener('click', function() {
		resource_home.className = 'hidden';
		resource_outreach.className = 'hidden';
		resource_specialeventplanning.className = 'hidden';
		resource_bible.className = 'hidden';
		resource_meetingminute.className = 'col-sm-8 col-sm-offset-2 active';
	});

	
});
