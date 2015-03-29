var ChartConstants = require('../constants/chart-constants.jsx');
var ChartDispatcher = require('../dispatchers/chart-dispatcher.jsx');

var ChartActions = {

  getData : function (startDate, endDate) {
    console.log('ChartActions getData', ChartConstants.GET_DATA, startDate, endDate);
    ChartDispatcher.handleViewAction({
      actionType: ChartConstants.GET_DATA,
      startDate: startDate,
      endDate: endDate
    });
  }
};

module.exports = ChartActions;