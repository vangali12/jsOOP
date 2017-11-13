function Ninja(name) {
	var self = this;
	var speed = 3;
	var strength = 3;
	this.name = name;
	this.health = 100;

	this.sayName = function() {
		console.log('My Name is ' + this.name)
		return self
	}
	this.getSpeed = function() {
		return speed;
	}
	this.getStrength = function() {
		return strength;
	}
	this.showStats = function() {
		console.log('Name: ' + this.name + ', Health: ' + this.health + ', Speed: ' + speed + ', Strength: ' + strength);
		return self;
	}
	this.drinkSake = function() {
		this.health += 10;
		return self;
	}
}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();