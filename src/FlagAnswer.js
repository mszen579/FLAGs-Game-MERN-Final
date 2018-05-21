import React from 'react';
import StyledButton from './StyledButton';
import './index.css';


var score = 0
const FlagAnswer = ({correct, answer, onNext, onNext2}) => (
  
  <div className='flag-answer'>
    {correct ?
      <h3 className="text-success">Correct!: {answer} Your score is = {score+=1}</h3> :
    <h3 className="text-warning">  Incorrect! The correct answer is: {answer}, Your score is = {score-=1}</h3>}  <nbsp />
    {score<-4 ?  <a className='btn btn-danger' href='/Home'>GAMEOVER...You are kicked out</a> 
                     : 
                    <StyledButton text="Play again" onClick={onNext} /> }
  </div>
);

export default FlagAnswer;

