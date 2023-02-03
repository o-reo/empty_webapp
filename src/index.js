import React from 'react';
import { render } from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.counter}</h2>
        <h3>{process.env.REACT_APP_DATA}</h3>
        <span>{process.env.REACT_APP_ORGANIZATION_ID}</span>
        <span>{process.env.COSMOTECH_API_SCOPE}</span>
        <button onClick={
          () => this.setState({ counter: (this.state.counter + 1) })
        }>increase</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));