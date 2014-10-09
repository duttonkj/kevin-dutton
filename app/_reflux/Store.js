
var Reflux = require('reflux');
var Actions = require('./Actions.js');

module.exports = Reflux.createStore({

    listenables: Actions,

    onViewMounted: function(){
        console.log('Store: send view action');
        this.trigger();
    }

});
