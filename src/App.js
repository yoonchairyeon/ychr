import React,{useState} from 'react';
import Hello from './Hello';
import Bye from './Bye';

function App() {
  const [number, setNumber] = useState(0);


  function Plus() {
    setNumber(number +1);
  }
  function Minus() {
    setNumber(number -1);
  }
  function Double() {
    setNumber(number * 2);
  }

  return(
    <div>
    <Hello number={number}/>
    <Bye onClick={Plus} text="+1" />
    <Bye onClick={Minus} text="-1" />
    <Bye onClick={Double} text="*2" />
  </div>
  );
}

export default App;