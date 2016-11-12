var Money = {
    bank: 100,

    reward: 0,

    bet: 0,

    canPlay: function() {
        return this.bank >= this.bet ? true : false;
    },

    setBet: function(value) {
        this.bet = +value;
    },

    getInfo: function() {
        return { bank: this.bank, reward: this.reward };
    },

    payBet: function() {
        this.bank -= this.bet;
    }
};