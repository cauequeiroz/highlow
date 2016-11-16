var Money = {
    bank: null,

    reward: 0,

    rewardList: {
        10: [2,5,10,20,40,100,200,400,1000],
        50: [10,25,50,100,200,500,1000,2000,5000],
        100: [20,50,100,200,400,1000,2000,4000,10000]
    },

    bet: 0,

    canPlay: function() {
        return this.bank >= this.bet ? true : false;
    },

    setBet: function(value) {
        this.bet = +value;
    },

    payBet: function() {
        this.bank -= this.bet;
        this.saveBank();
    },

    getInfo: function() {
        return { bank: this.bank, reward: this.reward };
    },

    getReward: function() {
        return this.reward;
    },

    updateReward: function() {
        this.reward = this.rewardList[this.bet][Card.getLevel()-1];
    },

    cashout: function() {
        this.bank += this.reward;
        this.saveBank();
    },

    saveBank: function() {
        localStorage.setItem('highlow', this.bank);
    },  

    generateBank: function() {
        var b = localStorage.getItem('highlow');

        this.bank = ( b === null || b === "0" ) ? 50 : b;
    },  

    reset: function() {
        this.reward = this.bet = 0;
    }
};
Money.generateBank();