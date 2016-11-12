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
        document.querySelector('.action-buttons').addEventListener('click', Game.actions, false);          
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
    },

    actions: function(e) {
        if ( !Game.allowUser ) return;

        var type = {
            'high': function() {
                console.log('click on high')
            },
            'low': function() {
                console.log('click on low')
            },
            'cashout': function() {
                if ( Money.getReward() ) {
                    Money.cashout();                    
                    Game.restart();
                }
            }
        }
        
        type[e.target.getAttribute('data-action')] () ;
    },

    restart: function() {
        Game.allowUser = Game.started = false;

        UI.updateHUD();
        UI.reset();
        Card.reset();
    }
};
Game.init();