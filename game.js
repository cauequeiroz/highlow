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
        if ( Card.getLevel() < 9 ) {
            Card.nextLevel();
            Card.sortCard();

            Game.allowUser = true;
        } else {
            Money.cashout();
            Game.restart();
        }
    },

    actions: function(e) {
        if ( !Game.allowUser ) return;

        var type = {
            'high': function() {
                var choice = Card.compare('high');
                Game.result(choice);
            },

            'low': function() {
                var choice = Card.compare('low');
                Game.result(choice);
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

    result: function(win) {
        UI.showCard();
        Game.allowUser = false;

        setTimeout(function() {
            if ( win ) {
                Money.updateReward();
                UI.updateHUD();
                Game.continue();
            } else {
                Game.restart();     
            }
        }, 1000);        
    },

    restart: function() {
        Game.allowUser = Game.started = false;

        Money.reset();
        Card.reset();
        UI.reset();
    }
};
Game.init();