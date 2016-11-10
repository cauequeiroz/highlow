var Game = {
    bank: 100,

    reward: 0,

    allowUser: false,

    start: false,
    
    betValue: 0,

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
    },

    canPlay: function() {
        return Game.bank >= Game.betValue ? true : false;
    },

    updateHUD: function() {
        document.querySelector('.bank').innerHTML = '$ ' + Game.bank;
        document.querySelector('.reward').innerHTML = '$ ' + Game.reward;
    },

    turnCard: function() {
        console.log('lets play');
    }
}
Game.init();