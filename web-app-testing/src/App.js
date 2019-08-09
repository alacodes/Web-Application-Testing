import React, { useState } from 'react';
import './App.css';
import Display from './components/Display'
import Controls from './components/Dashboard'



function App() {
  const [strikes, setStrikes] = useState(0)
  const [balls, setBalls] = useState(0)

  const strikeAdd = () => {
    if (strikes === 2) {
      setStrikes(0)
      setBalls(0)
    } else {
      setStrikes(strikes+1)
    }
  };
  const ballAdd = () => {
    if (balls === 3) {
      setStrikes(0)
      setBalls(0)
    } else {
      setBalls(balls+1)
    }
  };
  const foulAdd = () => {
    if (strikes !== 2) {
      setStrikes(strikes+1)
    }
  };
  const hitAdd = () => {
    setStrikes(0)
    setBalls(0)
  };
  return(
    <div className="App"> 
      <Display strikes={strikes} balls={balls}/> 
      <Controls strike={strikeAdd}
                ball={ballAdd}
                foul={foulAdd}
                hit={hitAdd} />
    </div>
  )
}

export default App;
