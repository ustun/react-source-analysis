var StackTrace = require('stacktrace-js');
var p = function () {
  StackTrace.get().then(function (x) {
    console.log.bind(console)(JSON.stringify(x, null, 4));
  });
};
var React = require('./React');
var ReactDOM = require('./ReactDOM');
window.p = p;

var Hello = React.createClass({

  render() {
    p()
    return <div className="">
      Hello there!
      </div>;

  }

});


var Counter = React.createClass({

  getInitialState() {
    return {count: this.props.initialValue};
  },

  onClick() {
    this.setState({count: this.state.count + 1});
  },

  render() {
    p()
    return <div className="">
      <div>Counter value is: {this.state.count}</div>
      <button onClick={this.onClick} className="pure-button pure-button-primary">Submit</button>

      </div>;

  }

});


var App = React.createClass({

  render() {
    p();
    return <div className="">
      <Hello/>
      <Counter initialValue={5}/>
      </div>;

  }

});

var el = <App/>;
ReactDOM.render(el, document.getElementById('main'));
