
var Dispatcher = require('flux').Dispatcher;
var ChartDispatcher = new Dispatcher();

ChartDispatcher.handleViewAction = function (action) {

  console.log('ChartDispatcher handleViewAction', action);

  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });

};

module.exports = ChartDispatcher;