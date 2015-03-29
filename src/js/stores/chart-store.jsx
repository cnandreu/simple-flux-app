var ChartDispatcher = require('../dispatchers/chart-dispatcher.jsx');
var ChartConstants = require('../constants/chart-constants.jsx');
var _ = require('underscore');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

//mocked network call data
var fakeData1 = [1, 2, 3];
var fakeData2 = [4, 5, 6];

//mocks network call
function _getData (startDate, endDate, cb) {

  console.log('calling _getData with', startDate, endDate);

  setTimeout(function () {

    if (startDate === 'Date1' && endDate === 'Date2') {

      cb(fakeData1);

    } else if (startDate === 'Date3' && endDate === 'Date4') {

      cb(fakeData2);

    } else {

      cb([]);
    }

  }, 10);
}

var ChartStore = _.extend({}, EventEmitter.prototype, {

  emitChange : function (data) {
    this.emit(CHANGE_EVENT, data);
  },

  addChangeListener : function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener : function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  dispatcherIndex: ChartDispatcher.register(function (payload) {

    var action = payload.action;

    switch (action.actionType) {

      case ChartConstants.GET_DATA:

        _getData(action.startDate, action.endDate, function (data) {
          ChartStore.emitChange(data);
        });

        break;
    }

    return true;
  })
});

module.exports = ChartStore;