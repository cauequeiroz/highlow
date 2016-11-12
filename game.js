/* ========================================

    HighLow Game
    an awesome hi-lo card game

    By Caue Queiroz <cauenqueiroz@gmail.com>

=========================================== */
var Game = {
    started: false,

    allowUser: false,

    init: function() {
        document.querySelector('.start-buttons').addEventListener('click', Game.play, false);            
    },

    play: function(e) {
        Money.setBet(e.target.getAttribute('data-value'));

        if ( !Game.canPlay() ) return;
        
        Game.started = true;

        Money.payBet();

        Card.sortCard();

        UI.selectButton(e.target);
        UI.updateHUD();
        UI.showCard();

        Game.continue();
    },

    canPlay: function() {
        return !this.started && Money.canPlay();  
    },

    continue: function() {
        Card.nextLevel();
        Card.sortCard();

        Game.allowUser = true;
    }
};
Game.init();