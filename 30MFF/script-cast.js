 // for each of the cast members, these JS function open up the text box with biographies upon the hover over "meet *name*" or image in the circle


var makeGhostTextAppear = () => {
  MatCastTextJS.innerText= "Matthew is a Computer Science student from the Philippines. He enjoys building silly and/or useless things with code. On an average weekend, you can find him playing video games with friends or binge-watching a show on Netflix.";	
  MatCastTextJS.style["margin-top"] = "25px";
  MatCastTextJS.style["color"] = "white";
  MatCastTextJS.style["text-shadow"] =  "2px 2px 10px black";
  
}




let MatCastTextJS = document.getElementById("cast-text1");
let MatCastPhoto = document.getElementById("cast-photo1");

MatCastTextJS.addEventListener('mouseenter', makeGhostTextAppear)
MatCastPhoto.addEventListener('mouseenter', makeGhostTextAppear)





var makeGhostTextAppear = () => {
  SafCastTextJS.innerText="Safeya is a Senior Music major with an Interactive Media minor from the UAE and Russia. You would find her working with electronic music, sound art and experimental composition most of the time, and reading about music other times.";	
  SafCastTextJS.style["margin-top"] = "25px";
  SafCastTextJS.style["color"] = "white"
  SafCastTextJS.style["textShadow"] =  "2px 2px 10px black"; ;
}


let SafCastTextJS = document.getElementById("cast-text2");
let SafCastPhoto = document.getElementById("cast-photo2");

SafCastTextJS.addEventListener('mouseenter', makeGhostTextAppear)
SafCastPhoto.addEventListener('mouseenter', makeGhostTextAppear)





var makeGhostTextAppear = () => {
  HasCastTextJS.innerText= "Hasin is a Sophomore from Pakistan deciding between Computer Science and Interactive Media as potential majors. When he's not coding, you can find him playing the guitar or staring into the starry night sky. Always up for a good food and a nice conversation with new people.";
  HasCastTextJS.style["margin-top"] = "25px";
  HasCastTextJS.style["color"] = "white"
  HasCastTextJS.style["text-shadow"] =  "2px 2px 10px black"; ;
}


let HasCastTextJS = document.getElementById("cast-text3");
let HasCastPhoto = document.getElementById("cast-photo3");

HasCastTextJS.addEventListener('mouseenter', makeGhostTextAppear)
HasCastPhoto.addEventListener('mouseenter', makeGhostTextAppear)


var makeGhostTextAppear = () => {
  AshCastTextJS.innerText= "Aisha is a Computer Science junior from Bosnia and Herzegovina. She loves exploring bioinformatics and cybersecurity. Apart from drinking coffee with friends, you can find her hiking, running, or camping in the nature.";
  AshCastTextJS.style["margin-top"] = "25px";
  AshCastTextJS.style["color"] = "white"
  AshCastTextJS.style["text-shadow"] =  "2px 2px 10px black"; ;
}


let AshCastTextJS = document.getElementById("cast-text4");
let AshCastPhoto = document.getElementById("cast-photo4");

AshCastTextJS.addEventListener('mouseenter', makeGhostTextAppear)
AshCastPhoto.addEventListener('mouseenter', makeGhostTextAppear)


