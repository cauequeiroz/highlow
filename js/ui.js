var UI = {
    selectButton: function(button) {
        button.classList.add('selected');
    },

    updateHUD: function() {
        var info = Money.getInfo();

        document.querySelector('.bank').innerHTML = '$ ' + info.bank;
        document.querySelector('.reward').innerHTML = '$ ' + info.reward;
    },

    changeCard: function(card, value, ref) {
        var elem = document.querySelectorAll('.card-list li')[card];

        elem.setAttribute('data-ref', ref);
        elem.querySelector('.back').innerHTML = value;
    },

    showCard: function() {
        var n = Card.getLevel();

        document.querySelectorAll('.card-list li')[n].classList.add('turn');
    }
};