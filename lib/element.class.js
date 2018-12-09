
class Element {

	constructor(elem){
		this.element = elem || document.createElement("div");
	}

	addToPage(){
		document.body.appendChild(this.element);
	}

	left(val){
		this.element.style.left = numberPlusPx(val);
	}

	top(val){
		this.element.style.top = numberPlusPx(val);
	}

	width(val){
		this.element.style.width = numberPlusPx(val);
	}

	height(val){
		this.element.style.height = numberPlusPx(val);
	}

	randomSize(min, max){
		this.size( randomNumber(min, max));
	}
	
	position(x, y){
		this.left(x);
		this.top(y);
	}

	size(w, h){
		this.width(w);
		this.height(h);
	}

	text(txt){
		this.element.innerText = txt;
	}


	html(htm){
		this.element.innerHTML = htm;
	}

	hide(){
		this.element.style.display = "none";
	}

	show(){
		this.element.style.display = "block";
	}

	opacity(val){
		this.element.style.opacity = val;
	}

	color(val){
		this.element.style.color = val;
	}

	backgroundColor(val){
		this.element.style.backgroundColor = val;
	}

	randomColor(){
		this.color( randomColor() );
	}

	randomPos(){
		this.position(randomNumber(0, window.innerWidth), randomNumber(0, window.innerHeight));
	}

	randomFontSize(){
		this.fontSize(randomNumber(0, 60));
	}

	fontSize(fs){
		this.element.style.fontSize = fs + "px";
	}

	randomBackgroundColor(){
		this.backgroundColor( randomColor() );
	}

	remove(){
		this.element.parentNode.removeChild(this.element);
	}

}

