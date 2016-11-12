var Money = {
    bank: 50,

    bet: 0,

    setBet: function(value) {
        this.bet = +value;
    },

    canPlay: function() {
        return this.bank >= this.bet ? true : false;
    }
};