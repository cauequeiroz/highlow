var Money = {
    bank: 100,

    reward: 1548,

    bet: 0,

    canPlay: function() {
        return this.bank >= this.bet ? true : false;
    },

    setBet: function(value) {
        this.bet = +value;
    },

    payBet: function() {
        this.bank -= this.bet;
    },

    getInfo: function() {
        return { bank: this.bank, reward: this.reward };
    },

    getReward: function() {
        return this.reward;
    },

    cashout: function() {
        this.bank += this.reward;
        this.reward = 0;
    }
};