var React = require('react');
var ChartActions = require('../actions/chart-actions.jsx');
var ChartStore = require('../stores/chart-store.jsx');

var ChartPage = React.createClass({

  getInitialState : function () {
    console.log('ChartPage getInitialState');
    return {
      data : []
    };
  },

  componentDidMount : function () {
    console.log('ChartPage componentDidMount');
    ChartStore.addChangeListener(this._onChange);
    ChartActions.getData('Date1', 'Date2');
  },

  componentWillUnmount: function () {
    console.log('ChartPage componentWillUnmount');
    ChartStore.removeChangeListener(this._onChange);
  },

  dateChangeHandler : function () {
    console.log('ChartPage dateChangeHandler');
    ChartActions.getData('Date3', 'Date4');
  },

  render: function () {
    console.log('ChartPage render');
    return (
      <div>
        This is my page...

        <ListComponent data={this.state.data} />

        <div onClick={this.dateChangeHandler}>Click here to change the date...</div>
      </div>
      );
  },

  _onChange : function (data) {
    console.log('ChartPage _onChange', data);
    this.setState({data: data});
  }

});

var ListComponent = React.createClass({

  render : function () {
    console.log('ListComponent render');
    return (
      <div>
      Data: {this.props.data}
      </div>
    );
  }

});

module.exports = ChartPage;