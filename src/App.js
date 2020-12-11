import sendCommands from './network'
import React, { useState } from 'react';
import './App.css';

function App() {

  const [contatore, setContatore] = useState(0);

  const [toggle, setToggle] = useState(true);

  return (
    <div className="App">
      <p>{contatore}</p>
      {toggle && <button onClick={async (event) => {
        setToggle(false)
        setContatore(contatore + 1)
        var ret = await sendCommands(() => { setToggle(true) })
        console.log(ret)
      }}>Switch ON</button>}
    </div>
  );
}

export default App;
