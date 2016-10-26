var React = require("react");

function Navbar (props){
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            LifeList
          </a>
        </div>
        <ul className="nav nav-tabs navbar-right">
          <li role="presentation" className="active"><a href="#">Home</a></li>
          <li role="presentation"><a href="#">SignUp</a></li>
          <li role="presentation"><a href="#">Login</a></li>
          <li role="presentation"><a href="#">GitHub</a></li>
        </ul>
      </div>
    </nav>
  );
};

module.exports = Navbar;
