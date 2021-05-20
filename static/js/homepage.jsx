"use strict";

function Homepage() {
  return (
    <div>
      <p>Welcome to Ballonicorn's Trading Card Site!!</p>
      <a href="/cards">"Click here to view the trading cards"</a>
      <img src="/static/img/balloonicorn.jpg" />
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
