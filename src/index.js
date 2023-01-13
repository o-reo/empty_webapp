import React from 'react';
import { render } from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.data = process.env.REACT_APP_DATA
    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.counter}</h2>
        <h3>{this.data}</h3>
        <button onClick={
          () => this.setState({ counter: (this.state.counter + 1) })
        }>increase</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));