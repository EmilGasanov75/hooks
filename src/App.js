import { useState, useEffect } from 'react';
import Modal from './Modal'

function App() {
  const [visible, setVisible] = useState(false)
  useEffect(function() {
    setTimeout(() => {
      setVisible(true)
    }, 1000);
  }, [])

  return (
    <div className="App">
      {visible ? <Modal setVisible={setVisible}/> : null}
      
    </div>
  );
}

export default App;
