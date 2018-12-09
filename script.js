function getRandomPosition(element) {
	var x = document.body.offsetHeight-element.clientHeight;
	var y = document.body.offsetWidth-element.clientWidth;
	var randomX = Math.floor(Math.random()*x);
	var randomY = Math.floor(Math.random()*y);
	return [randomX,randomY];
}


window.onload = () => {

function EyePosRandom() {
  var eye = document.createElement('img');
	eye.setAttribute("style", "position:absolute; width:13%;  pointer-events: none;");
	eye.setAttribute("src", "./img/eye.gif");
	document.body.appendChild(eye);
	var xy = getRandomPosition(eye);
	eye.style.top = xy[0] + 'px';
	eye.style.left = xy[1] + 'px';
};

for (i = 0; i < 26; i++){
  EyePosRandom(i);
};




document.onclick =  function Click() {
    var eye = document.createElement('img');
  	eye.setAttribute("style", "position:absolute; width:13%;");
  	eye.setAttribute("src", "./img/eye.gif");
  	document.body.appendChild(eye);
  	var xy = getRandomPosition(eye);
  	eye.style.top = xy[0] + 'px';
  	eye.style.left = xy[1] + 'px';
}

};
