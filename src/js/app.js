import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/hello-world';

const App = () => {
  return(
    <HelloWorld />
  )
}

ReactDOM.render(<App />, document.getElementById('react-container'));
