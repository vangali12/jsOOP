function Ninja(name) {
	var self = this;
	var speed = 3;
	var strength = 3;
	this.name = name;
	this.health = 100;

	this.getSpeed = function() {
		return speed;
	}
	this.getStrength = function() {
		return strength;
	}
}

Ninja.prototype.sayName = function() {
	console.log('My Name is ' + this.name)
	return this;
}

Ninja.prototype.drinkSake = function() {
	this.health += 10;
	return this;
}

Ninja.prototype.showStats = function() {
	var speed = this.getSpeed();
	var strength = this.getStrength();
	console.log('Name: ' + this.name + ', Health: ' + this.health + ', Speed: ' + speed + ', Strength: ' + strength);
	return this;
}

Ninja.prototype.punch = function(punched) {
	if (punched instanceof Ninja) {
		punched.health -= 5;
		console.log(punched.name + " was punched by " + this.name + " and lost 5 Health!");
	} else {
		console.log("You can't attack a non-ninja!")
	}
	return this;
}

Ninja.prototype.kick = function(kicked) {
	if (kicked instanceof Ninja) {
		kicked.health -= (15 * this.getStrength());
		console.log(kicked.name + " was kicked by " + this.name + " and lost " + kicked.health + " Health!")
	} else {
		console.log("You can't attack a non-ninja!")
	}
}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

var blue_ninja = new Ninja("Goemon");
var red_ninja = new Ninja("Bill Gates");
red_ninja.punch(blue_ninja);

blue_ninja.kick(red_ninja);
