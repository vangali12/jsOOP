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

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();