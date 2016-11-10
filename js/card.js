var Card = {

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

    getRandomCard: function() {
        var n = Math.floor( Math.random() * 13 + 1 );

        return {
            name: this.cards[n],
            ref: n
        };
    }
}