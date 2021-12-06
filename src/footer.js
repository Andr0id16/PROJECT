var destination = document.querySelector(".footer-container");

class Footer extends React.Component {
  render() {
    var liststyle = { paddingLeft: "0" };
    return (
      <div className="footer">
        <a href="Aboutus.html">About us</a>
        <br />
        <a href="Contactus.html">Contact us</a>
        <br />
        <ul type="none" style={liststyle}>
          <li>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
ReactDOM.render(<Footer />, destination);
ReactDOM.render(
  <h1>
    <a id="titlelink" href="index.html">
      donkeytype
    </a>
  </h1>,
  document.getElementById("title")
);
