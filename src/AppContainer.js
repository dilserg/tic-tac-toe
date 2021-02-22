import React from 'react';
import circle from './images/circle.svg';
import cross from './images/krest.svg';
import App from './App';

const AppContainer = () => {
  
  const isWin = (winCombination, array) => {
    for (let elem of winCombination)
      if (!array.includes(elem))
        return false;
    return true;
  };
  
  const isWinNew = (winCombinations, array) => {
    for (let combination of winCombinations)
      if (isWin(combination, array))
        return true;
    return false;
  };
  const showSign = (n,circles,crosses) => {
    if (circles.includes(n)) {
      return <img className='circle' src={circle} alt=""/>;
    } else if (crosses.includes(n)) {
      return <img className='cross' src={cross} alt=""/>;
    } else return undefined;
  };
  
  const makeChoice = (n,circles,crosses,setCircles, setCrosses, move,setMove) => {
    if (circles.includes(n) || crosses.includes(n))
      return null;
    if (move % 2 === 0) {
      setCircles(prev => [...prev, n]);
    } else {
      setCrosses(prev => [...prev, n]);
    }
    setMove(prev => prev + 1);
  };
  
  const restart = (setCircles,setCrosses,setMove) => {
    setCircles([]);
    setCrosses([]);
    setMove(0);
  };
  
  return (
    <App restart={restart} makeChoice={makeChoice} showSign={showSign} isWinNew={isWinNew}/>
  );
};

export default AppContainer;