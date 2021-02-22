import React from 'react';

const Modal = (props) => {
  const restartGame = () => {
    props.endGame(false);
    props.restartGame();
  };
  
  return (
    <div className="modal">
      <div>
        {props.winner
          ? <>{props.winner} win</>
          : <>draw</>
        }
      </div>
      <div>
        <button onClick={restartGame}>New game</button>
      </div>
    </div>
  );
};

export default Modal;