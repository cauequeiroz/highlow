var Game = {
    start: false,
    allowUser: false,
    betValue: 0,

    init: function() {
        document.querySelector('.start-buttons').addEventListener('click', Game.play, false);
    },

    play: function(event) {
        if ( Game.start ) return;

        Game.start = true;
        Game.betValue = event.target.getAttribute('data-value');
        Game.turnCard();  
    },

    turnCard: function() {
        
    }
}
Game.init();