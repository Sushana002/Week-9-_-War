// TODO: I have to create a version of the classic war game, using JavaScript. 
// creating an automated version of the classic card game WAR! 
// In this version, there are only 2 players. 
// Use classes such as Card, Deck, and Player and what properties and methods they may include.

// The Cards classes ans structure

class Cards {
    constructor(suit, rank, value) {
        this.suit = suit; 
        this.rank = rank; 
        this.value = value; 
    }
}

// Creating the Deck class 

class Deck {
    constructor() {
        this.cards = [];
        this.initializeDeck();
        this.shuffle();
    }

    initializeDeck() {
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const values = {
            '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10,
            'J': 11, 'Q': 12, 'K': 13, 'A': 14
        };

        for (let suit of suits) {
            for (let rank of ranks) {
                this.cards.push(new this.cards(suit, rank, values[rank]));
            }
        }
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    deal() {
        return this.cards.shift();
    }
}

// Creating the class for WarGame

class WarGame {
    constructor() {
        this.deck = new Deck();
        this.player1 = new Player("Player 1");
        this.player2 = new Player("Player 2");
        this.dealCards();
    }

    dealCards() {
        while (this.deck.cards.length > 0) {
            this.player1.addCard(this.deck.deal());
            this.player2.addCard(this.deck.deal());
        }
    }

    playRound() {
        const card1 = this.player1.drawCard();
        const card2 = this.player2.drawCard();

        console.log(`Player 1 plays ${card1.rank} of ${card1.suit}`);
        console.log(`Player 2 plays ${card2.rank} of ${card2.suit}`);

        if (card1.value > card2.value) {
            console.log("Player 1 wins the round");
            this.player1.incrementScore();
        } else if (card1.value < card2.value) {
            console.log("Player 2 wins the round");
            this.player2.incrementScore();
        } else {
            console.log("It's a tie!");
        }
    }

    playGame() {
        const totalRounds = this.player1.hand.length;

        for (let i = 0; i < totalRounds; i++) {
            this.playRound();
        }

        console.log(`Final Score - Player 1: ${this.player1.score}, Player 2: ${this.player2.score}`);

        if (this.player1.score > this.player2.score) {
            console.log("Player 1 wins the game!");
        } else if (this.player1.score < this.player2.score) {
            console.log("Player 2 wins the game!");
        } else {
            console.log("The game is a tie!");
        }
    }
}

let game = new WarGame();
game.playGame();

// The class for the two players

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.score = 0;
    }

    drawCard() {
        return this.hand.shift();
    }

    addCard(card) {
        this.hand.push(card);
    }

    incrementScore() {
        this.score += 1;
    }
}

// Creating another WarGame class 

class WarGame {
    constructor() {
        this.deck = new Deck();
        this.player1 = new Player("Player 1");
        this.player2 = new Player("Player 2");
        this.dealCards();
    }

    dealCards() {
        while (this.deck.cards.length > 0) {
            this.player1.addCard(this.deck.deal());
            this.player2.addCard(this.deck.deal());
        }
    }

    playRound() {
        const card1 = this.player1.drawCard();
        const card2 = this.player2.drawCard();

        console.log(`Player 1 plays ${card1.rank} of ${card1.suit}`);
        console.log(`Player 2 plays ${card2.rank} of ${card2.suit}`);

        if (card1.value > card2.value) {
            console.log("Player 1 wins the round");
            this.player1.incrementScore();
        } else if (card1.value < card2.value) {
            console.log("Player 2 wins the round");
            this.player2.incrementScore();
        } else {
            console.log("It's a tie!");
        }
    }

    playGame() {
        const totalRounds = this.player1.hand.length;

        for (let i = 0; i < totalRounds; i++) {
            this.playRound();
        }

        console.log(`Final Score - Player 1: ${this.player1.score}, Player 2: ${this.player2.score}`);

        if (this.player1.score > this.player2.score) {
            console.log("Player 1 wins the game!");
        } else if (this.player1.score < this.player2.score) {
            console.log("Player 2 wins the game!");
        } else {
            console.log("The game is a tie!");
        }
    }
}




