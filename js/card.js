var Card = {
    level: 0,

    board: [],

    cards: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K',
            'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K',
            'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K',
            'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],

    sortCard: function() {
        var n = Math.floor( Math.random() * 52 ),
            value = this.cards[n],
            score = this.getScore(this.cards[n]);

        this.board.push(score);
        this.cards.splice(n, 1);

        UI.changeCard(this.level, value);
    },

    getScore: function(card) {
        var cards = {
            'A': 1,
            '2': 2,
            '3': 3,
            '4': 4,
            '5': 5,
            '6': 6,
            '7': 7,
            '8': 8,
            '9': 9,
            '10': 10,
            'J': 11,
            'Q': 12,
            'K': 13
        };

        return cards[card];
    },

    getLevel: function() {
        return this.level;
    },

    nextLevel: function() {
        this.level++;
    },

    compare: function(value) {
        var card_a = this.board[this.board.length-2],
            card_b = this.board[this.board.length-1];

        if ( value === "high" ) {
            return card_b >= card_a;
        } else {
            return card_b <= card_a;
        }
    },

    reset: function() {
        this.level = 0;
        this.board = [];
        this.cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K',
                      'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K',
                      'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K',
                      'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    },
};