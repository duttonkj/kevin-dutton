
var Reflux = require('reflux');
var Actions = require('./Actions.js');

module.exports = Reflux.createStore({

    listenables: Actions,

    onViewMounted: function(){
        this.trigger();
    },

    onCloseButtonShow: function(){
        this.trigger();
    },

    onCloseButtonHide: function(){
        this.trigger();
    }

});
