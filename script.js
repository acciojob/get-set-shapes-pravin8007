//complete this code
class Rectangle {
	constructor(height,width){
		this._height = height;
		this._width = width ;
	}
	get height(){
		return this._height ;
	}
	get width(){
		return this._width ;
	}

	getArea(){
		return this._width * this._height;
	}
}

class Square extends Animal {
	constructor(side){
		super(side,side);
	}
	getPerimeter(){
		return 4 * this._width ;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
