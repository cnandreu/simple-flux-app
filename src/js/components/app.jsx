
var React = require('react');
var ChartPage = require('../components/chart-page.jsx');

var App = React.createClass({

    render : function () {
      console.log('App render');
      return (
        <div>
          <ChartPage />
        </div>
      );
    }
  });
module.exports = App;