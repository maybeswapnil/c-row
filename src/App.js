/*

import './App.css';
import './script';
import React, { useState, useEffect }  from 'react';

function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1500);
    return () => clearInterval(interval);
  }, []);
  if(seconds%2==0) {
      return (<Main />);
  } else {
    return(<h1 id="main">Breathe out!</h1>);
  }
}

class Main extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
          display: true
      };
    }
    render() {
          return(
            <div>
              <h1 id="main">Breathe in!</h1>
            </div>
          )
      } 
    }

export default App;
*/