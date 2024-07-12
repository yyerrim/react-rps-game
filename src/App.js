import { useState } from 'react';
import './App.css';
import styles from './App.module.css';

function Title() {
  return (
    <div className='title'>
      <h1>가위 바위 보 게임</h1>
    </div>
  );
}
function Scissors(props) {
  return (
    <div className={styles.control}
      onClick={props.handleSelect.bind(this, 0)}>
      <img src='http://ggoreb.com/images/react/scissors.png' />
    </div>
  );
}
function Rock(props) {
  return (
    <div className={styles.control}
      onClick={props.handleSelect.bind(this, 1)}>
      <img src='http://ggoreb.com/images/react/rock.png' />
    </div>
  );
}
function Paper(props) {
  return (
    <div className={styles.control}
      onClick={props.handleSelect.bind(this, 2)}>
      <img src='http://ggoreb.com/images/react/paper.png' />
    </div>
  );
}
function Result(props) {
  return (
    <div className='result'>
      <h1>Com: {props.value.com}</h1>
      <h1>Player: {props.value.player}</h1>
      <h1>{props.value.result}</h1>
    </div>
  );
}
function App() {
  const [value, setValue] = useState({});

  const handleSelect = (num) => {
    const com = parseInt(Math.random() * 3);
    let result = "";
    if ((num + 1) % 3 == com) {
      // com 승리
      result = "com 승리";
    } else if (num == com) {
      // 비김
      result = "비김";
    } else {
      // player 승리
      result = "player 승리";
    }
    const newValue = { ...value };
    newValue.com = com;
    newValue.player = num;
    newValue.result = result;
    setValue(newValue);
  };

  return (
    <div className="App">
      <Title />
      <Scissors handleSelect={handleSelect} />
      <Rock handleSelect={handleSelect} />
      <Paper handleSelect={handleSelect} />
      <Result value={value} />
    </div>
  );
}

export default App;
