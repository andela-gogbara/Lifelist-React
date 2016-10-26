var React = require("react");
var Navbar = require("./Navbar");

var MainContainer = React.createClass({
  render: function(){
    return (
      <div>
        <Navbar ></Navbar>
        <h2>Hello World</h2>
      </div>
    )
  }
});

module.exports = MainContainer;
