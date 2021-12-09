var destination = document.querySelector("#nav");

class Nav extends React.Component {
  render() {
    return (
      <div>
        <span>
          <a href="/index">
            <i className="fas fa-keyboard"></i>
          </a>
          <a href="tutorial.html">
            <i className="fas fa-info"></i>
          </a>
          <a href="leaderboards.html">
            <i className="fas fa-crown"></i>
          </a>
          <a href="store.html">
            <i className="fas fa-shopping-bag"></i>
          </a>
          <a href="/login">
            <i className="fas fa-user"></i>
          </a>
        </span>
        <span style={{ float: "right" }}>
          <a href="signup.html">
            <i className="fas fa-sign-in-alt"></i>
          </a>
        </span>
      </div>
    );
  }
}
ReactDOM.render(<Nav />, destination);
