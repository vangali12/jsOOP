class Deck {
	constructor() {
		this.cards = [];
	}
	create() {
		var suit = ''
		for (var i=1; i<14; i++) {
			for (var j=0; j<4; j++) {
				if (j == 0) {
					suit = 'hearts';
				} else if (j == 1) {
					suit = 'diamonds';
				} else if (j == 2) {
					suit = 'clubs';
				} else {
					suit = 'spades';
				}
				var card = new Card(suit, i);
				this.cards.push(card);
			}
		}
	}
	shuffle() {
		for (var i=0; i<this.cards.length; i++) {
			var temp = this.cards[i];
			var randomNum = Math.floor(Math.random() * 52);
			var pick = this.cards[randomNum];
			this.cards[i] = pick;
			this.cards[randomNum] = temp;
		}
	}
	reset() {
		this.cards = [];
	}
	deal() {
		return this.cards.pop();
	}

}

class Card {
	constructor(suit, num) {
		this.suit = suit;
		this.num = num;
	}
}

class Player {
	constructor(name) {
		this.name = name;
		this.hand = [];
	}
	draw(Deck) {
		this.hand.push(Deck.deal());
	}
	discard() {
		this.hand.pop();
	}
	showHand() {
		var newStr = "(" + this.hand[0]['num'] + " of " + this.hand[0]['suit'] + ")";
		for (var i=1; i<this.hand.length; i++) {
			newStr += " , (" + this.hand[i]['num'] + " of " + this.hand[i]['suit'] + ")"
		}
		console.log("Your hand is " + newStr)
	}
}

var Deck1 = new Deck()
Deck1.create();
Deck1.shuffle();
console.log(Deck1.cards)

var p1 = new Player('Jack')
p1.draw(Deck1)
p1.draw(Deck1)
p1.showHand()
console.log(Deck1.cards)
