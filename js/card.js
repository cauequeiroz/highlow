var Card = {
    level: 0,

    board: [],

    cards: {
        1: 'A',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: 'J',
        12: 'Q',
        13: 'K'
    },

    sortCard: function() {
        var n = Math.floor( Math.random() * 13 + 1 ),
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