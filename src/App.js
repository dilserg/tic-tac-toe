import './App.css';
import React from 'react';
import circle from './images/circle.svg';
import cross from './images/krest.svg';
import Modal from './Modal';

function App({restart, makeChoice, showSign, isWinNew}) {
  
  const winCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 5, 9], [3, 5, 7], [1, 4, 7], [2, 5, 8], [3, 6, 9]];
  const [circles, setCircles] = React.useState([]);
  const [crosses, setCrosses] = React.useState([]);
  const [move, setMove] = React.useState(0);
  const [isEnd, endGame] = React.useState(false);
  const [winner, setWinner] = React.useState(null)
  
  React.useEffect(() => {
    if (isWinNew(winCombinations, crosses)) {
      setWinner("Crosses")
      endGame(true);
    } else if (isWinNew(winCombinations, circles)) {
      setWinner("Circles")
      endGame(true);
    } else if (move === 9) {
      setWinner(null);
      endGame(true);
    }
  }, [circles, crosses]);
  
  const restartGame = () => {
    restart(setCircles, setCrosses, setMove);
  };
  
  
  const makeTurn = (n) => {
    if (!isEnd)
      makeChoice(n, circles, crosses, setCircles, setCrosses, move, setMove);
  };
  
  return (
    <div className="App">
      <div className="turn">
        It's {move % 2 === 0
        ? <img src={circle} alt=""/>
        : <img src={cross} alt=""/>} turn
      </div>
      <div className="content">
        <div className="top left block" onClick={() => makeTurn(1)}>
          {showSign(1, circles, crosses)}
        </div>
        <div className="top block" onClick={() => makeTurn(2)}>
          {showSign(2, circles, crosses)}
        </div>
        <div className="top right block" onClick={() => makeTurn(3)}>
          {showSign(3, circles, crosses)}
        </div>
        <div className="left block" onClick={() => makeTurn(4)}>
          {showSign(4, circles, crosses)}
        </div>
        <div className="block" onClick={() => makeTurn(5)}>
          {showSign(5, circles, crosses)}
        </div>
        <div className="right block" onClick={() => makeTurn(6)}>
          {showSign(6, circles, crosses)}
        </div>
        <div className="bottom left block" onClick={() => makeTurn(7)}>
          {showSign(7, circles, crosses)}
        </div>
        <div className="bottom block" onClick={() => makeTurn(8)}>
          {showSign(8, circles, crosses)}
        </div>
        <div className="bottom right block" onClick={() => makeTurn(9)}>
          {showSign(9, circles, crosses)}
        </div>
      </div>
      {isEnd &&
      <Modal winner={winner} endGame={endGame} restartGame={restartGame}/>
      }
    </div>
  );
}

export default App;
