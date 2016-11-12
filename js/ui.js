var UI = {
    selectButton: function(button) {
        button.classList.add('selected');
    },

    updateHUD: function() {
        var info = Money.getInfo();

        document.querySelector('.bank').innerHTML = '$ ' + info.bank;
        document.querySelector('.reward').innerHTML = '$ ' + info.reward;
    }
};