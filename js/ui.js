var UI = {
    selectButton: function(button) {
        button.classList.add('selected');
    },

    updateHUD: function() {
        var info = Money.getInfo();

        document.querySelector('.bank').innerHTML = '$ ' + info.bank;
        document.querySelector('.reward').innerHTML = '$ ' + info.reward;
    },

    changeCard: function(card, value) {
        var elem = document.querySelectorAll('.card-list li')[card];
            elem.querySelector('.back').innerHTML = value;
    },

    showCard: function() {
        var n = Card.getLevel(),
            card = Card.getValue(Card.board[n]),
            elem = document.querySelectorAll('.card-list li')[n];

        elem.querySelector('.back').innerHTML = card;
        elem.classList.add('turn');
        
        Sound.play('flip');
    },

    reset: function() {
        document.querySelectorAll('.card-list li').forEach(function(elem) {
            Sound.play('flip');
            elem.classList.remove('turn');
        });
        document.querySelector('.start-buttons .selected').classList.remove('selected');

        this.updateHUD();
    }
};