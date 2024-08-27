// Import necessary modules
import React from 'react';
import Button from '@mui/material/Button';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import "./Button2.css"

// Define the ButtonComponent with an icon prop
const ButtonComponent = ({ onClick, text, iconDirection = 'right' }) => {
  const icon = iconDirection === 'right' ? <ArrowCircleRightIcon /> : <ArrowCircleLeftIcon />;

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={icon}
      onClick={onClick}
      style={{ margin: '10px', backgroundColor: 'transparent', borderRadius:'1000px', width:'5px', border:'1px solid black', color:'black'}} // Optional styling
    >
      {text}
    </Button>
  );
};

export default ButtonComponent;
