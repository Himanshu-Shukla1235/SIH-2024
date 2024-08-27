// Import necessary modules
import React from 'react';
import Button from '@mui/material/Button';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import "./Button2.css"

// Define the ButtonComponent with an icon prop
const ButtonComponent = ({ onClick, text, iconDirection = 'right' }) => {
  const icon = iconDirection === 'right' ? <ArrowCircleRightIcon sx={{}}/> : <ArrowCircleLeftIcon />;

  return (
    <Button
  variant="contained"
  color="primary"
  onClick={onClick}
  style={{
    margin: '10px',
    backgroundColor: 'transparent',
    borderRadius: '50%',
    width: '40px',  // Adjust this value for size
    height: '40px', // Adjust this value for size
    border: 'none',
    color: 'black',
    minWidth: 'unset', // Ensures the button stays small
    padding: '0',      // Removes extra padding
    display: 'flex',   // Centers the content
    alignItems: 'center', // Centers the icon vertically
    justifyContent: 'center', 
    opacity:'0.5'// Centers the icon horizontally
  }}
>
  {icon} {/* Directly place the icon here */}
</Button>

  );
};

export default ButtonComponent;
