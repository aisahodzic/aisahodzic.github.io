function check() {

    if (document.getElementById('1').checked){
    document.getElementById("video-1").checked = "checked";}
    if (document.getElementById('2').checked){
    document.getElementById("video-2").checked = "checked";}
    if (document.getElementById('3').checked){
    document.getElementById("video-3").checked = "checked";}
    if (document.getElementById('4').checked){
    document.getElementById("video-4").checked = "checked";}    
}

window.onscroll = function() {home(); getstarted(); DIYkit(); about() };

function home() {
  if (document.body.scrollTop > 0 && document.body.scrollTop < 558 || document.documentElement.scrollTop > 0 && document.documentElement.scrollTop < 558) {
    document.getElementById("home").className = "newAtt";} 
  else {
    document.getElementById("home").className = "oldAtt";
  }
}

function getstarted() {
    if (document.body.scrollTop > 558 && document.body.scrollTop < 1130 || document.documentElement.scrollTop > 558 && document.documentElement.scrollTop < 1130) {
      document.getElementById("started").className = "newAtt";} 
    else {
      document.getElementById("started").className = "oldAtt";
    }
  }

