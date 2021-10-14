class navigationbar extends React.Component{
    render(){
        navstyle={
            borderBottom:"2px solid white",
        }
        return
        
        <div> 
        <span>
      <a href="index.html">HOME</a>
      <a href="tutorial.html">TUTORIAL</a>
      <a href="leaderboards.html">LEADERBOARDS</a>
      <a href="store.html">STORE</a>
      </span>
      <span style="float:right">
        <a href="signup.html">SIGN IN</a>
      </span>
      </div>
    }
}
ReactDOM.render(<navigationbar/>,dest);
