


var makeGhostTextAppear = () => {
  MatCastTextJS.style["color"] = "white"
  MatCastTextJS.style["text-shadow"] =  "2px 2px 10px black";
  
}

// var makeGhostTextDisappear = () => {
//   setTimeout(() => {
//     CastTextJS.style.color = "#a773c1"; 
//   }, 1500)
// }


let MatCastTextJS = document.getElementById("cast-text1");

MatCastTextJS.addEventListener('mouseenter', makeGhostTextAppear)
// CastTextJS.addEventListener('mouseleave', makeGhostTextDisappear)




var makeGhostTextAppear = () => {
  SafCastTextJS.style["color"] = "white"
  SafCastTextJS.style["textShadow"] =  "2px 2px 10px black"; ;
}


let SafCastTextJS = document.getElementById("cast-text2");

SafCastTextJS.addEventListener('mouseenter', makeGhostTextAppear)



var makeGhostTextAppear = () => {
  HasCastTextJS.style["color"] = "white"
  HasCastTextJS.style["text-shadow"] =  "2px 2px 10px black"; ;
}


let HasCastTextJS = document.getElementById("cast-text3");

HasCastTextJS.addEventListener('mouseenter', makeGhostTextAppear)


var makeGhostTextAppear = () => {
  AshCastTextJS.style["color"] = "white"
  AshCastTextJS.style["text-shadow"] =  "2px 2px 10px black"; ;
}


let AshCastTextJS = document.getElementById("cast-text4");

AshCastTextJS.addEventListener('mouseenter', makeGhostTextAppear)