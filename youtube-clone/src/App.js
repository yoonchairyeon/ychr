import React, {useState} from 'react';
import Button from './Button.js';
import styles from './App.module.css'


function App() {


  const [Value, setValue] = useState(false);


  function onClick() {
    setValue(Value => !Value);
  }


  return (
    <div className={styles.box}>
      <Button onClick = {onClick} text = "버튼" />
      {Value == true&&<div>버튼을 눌렀습니다.</div>}
      {Value == false&&<div>버튼을 취소했습니다.</div>}
    </div>
  )
}


export default App;