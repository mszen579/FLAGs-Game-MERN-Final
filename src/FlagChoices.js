import React from 'react';
import StyledButton from './StyledButton';
import './index.css';

const FlagChoices =  props => {
  let options = props.options || []
  const {handleChange, handleSubmit} = props;
  let inputs = options.map(opt => (
    <label key={opt.id}><br />
      <input type="radio"
             value={opt.id}
             checked={opt.checked}
             onChange={handleChange}
             name="flag-choice"/> <nbsp />
      {opt.name}
    </label>
  ));

  return (
    <form className="flag-form" onSubmit={handleSubmit}>
      {inputs}
      <StyledButton text="GUESS" type="submit"/>
    </form>
  );
}

export default FlagChoices;
