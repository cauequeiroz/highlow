var Game = {
    bank: 100,

    reward: 0,

    allowUser: false,

    start: false,
    
    betValue: 0,

    level: 0,

    init: function() {
        document.querySelector('.start-buttons').addEventListener('click', Game.play, false);
    },

    play: function(event) {
        Game.betValue = event.target.getAttribute('data-value');

        if ( Game.start || !Game.canPlay() ) return;        

        event.target.classList.add('selected');

        Game.start = true;
        Game.bank -= Game.betValue;
        Game.updateHUD();
        Game.turnCard();
        Game.nextLevel();
    },

    canPlay: function() {
        return Game.bank >= Game.betValue ? true : false;
    },

    updateHUD: function() {
        document.querySelector('.bank').innerHTML = '$ ' + Game.bank;
        document.querySelector('.reward').innerHTML = '$ ' + Game.reward;
    },

    turnCard: function() {
        var card = Card.getRandomCard(),
            elem = document.querySelectorAll('.card-list li')[Game.level];

        elem.querySelector('.back').innerHTML = card.name;
        elem.setAttribute('data-ref', card.ref); 
    },

    nextLevel: function() {
        document.querySelectorAll('.card-list li')[Game.level].classList.add('turn');

        Game.level++;
        Game.turnCard();
        Game.allowUser = true;
    }
}
Game.init();