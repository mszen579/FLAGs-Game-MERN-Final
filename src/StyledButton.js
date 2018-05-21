import React from 'react';

const StyledButton = ({text, onClick, type}) => (
  <button
    type={type || 'button'}
    onClick={onClick}
    style={{
      backgroundColor: "white",
      borderRadius: "50px",
      border: "none",
      color: "black",
      padding: "4px 10px",
      textAlign: "center",
      textDecoration: "none",
      fontSize: "1em",
      'font-weight': "800",
    }}
  >
    {text}
  </button>
);

export default StyledButton;
