var Card = {
    level: 0,

    board: [],

    cards: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],

    sortCard: function() {
        var n = Math.floor( Math.random() * 13 ),
            value = this.cards[n];

        this.board.push(n);

        UI.changeCard(this.level, value);
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
    },
};