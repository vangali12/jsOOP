class Ninja {
	constructor(name) {
		this.name = name;
		this.health = 100;
		this.speed = 3;
		this.strength = 3;
	}
	sayName() {
		console.log('My name is ' + this.name)
	}
	showStats() {
		console.log(`Strength: ${this.strength} Speed: ${this.speed} Health: ${this.health}`)
	}
	drinkSake() {
		this.health += 10
	}
}

class Sensei extends Ninja {
	constructor(name) {
		super(name);
		this.health = 200;
		this.wisdom = 10;
		this.speed = 10;
		this.strength = 10;
	}
	speakWisdom() {
		super.drinkSake();
		console.log('What one programmer can do in one month, two progammers can do in two months.')
	}
}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

let super_sensei = new Sensei("Master Splinter");
super_sensei.speakWisdom();
super_sensei.showStats();