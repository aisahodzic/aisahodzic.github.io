var shortname = document.getElementById("shortname");
var longername = document.getElementById("longername");
var parent = document.getElementById("expanded-text");

// var naviga = document.getElementsByClassName("naviclass")[1];
var naviga= document.querySelectorAll('#navi');
var triangle1 = document.getElementsByClassName("column")[0];
var triangle2 = document.getElementsByClassName("column")[1];
var triangle3 = document.getElementsByClassName("column")[2];


naviga[0].addEventListener("mouseenter", function( ){

	triangle1.style.transform ="rotate(180deg)";
	triangle2.style.transform ="rotate(-180deg)";
	triangle3.style.transform ="rotate(180deg)";

});

naviga[2].addEventListener("mouseenter", function( ){

	triangle1.style.transform ="rotate(-180deg)";
	triangle2.style.transform ="rotate(180deg)";
	triangle3.style.transform ="rotate(-180deg)";

});

naviga[4].addEventListener("mouseenter", function( ){

	triangle1.style.transform ="rotate(180deg)";
	triangle2.style.transform ="rotate(-180deg)";
	triangle3.style.transform ="rotate(180deg)";

});

naviga[6].addEventListener("mouseenter", function( ){

	triangle1.style.transform ="rotate(-180deg)";
	triangle2.style.transform ="rotate(180deg)";
	triangle3.style.transform ="rotate(-180deg)";

});

naviga[8].addEventListener("mouseenter", function( ){

	triangle1.style.transform ="rotate(180deg)";
	triangle2.style.transform ="rotate(-180deg)";
	triangle3.style.transform ="rotate(180deg)";

});






width = shortname.clientWidth;


parent_width = parent.clientWidth;
children_translate = parent_width * -0.4;
// console.log(parent.clientWidth);

console.log(children_translate);


shortname.addEventListener("mouseenter", function( event ) {

	if(event.currentTarget.dataset.triggered) return;
    event.currentTarget.dataset.triggered = true;

  var pos = 45;
  var id = setInterval(frame, 20);
  function frame() {
    if (pos == 15) {
      clearInterval(id);
    } else {
      pos=pos-0.3;
      shortname.style.left = pos + '%';
    }
  }

 	var op = 0.05;  // initial opacity
    longername.style.transform=" translateX(-10%)";
    
       

    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        
        longername.style.opacity = op;
        longername.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.008;
    }, 10);



	},);


   