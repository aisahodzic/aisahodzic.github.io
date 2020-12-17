var project = document.getElementById("project-link");

var triangle1 = document.getElementsByClassName("column")[0];
var triangle3 = document.getElementsByClassName("column")[1];

project.addEventListener("mouseenter", function( ){

	triangle1.style.transform ="rotate(180deg)";
	
	triangle3.style.transform ="rotate(180deg)";



});

project.addEventListener("mouseleave", function( ){

	triangle1.style.transform ="rotate(360deg)";
	
	triangle3.style.transform ="rotate(360deg)";



});