import React, { useState } from 'react';
import {
  OutlinedInput,
  Button,
  InputAdornment,
  Typography,
  FormGroup,
  Box,
} from '@mui/material';

export default function FeetToInches() {
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');

  function calculateInches() {
    return Number(feet)*12+Number(inches);
  }

  return (
    <>
      <Typography variant="h4" component="h2">
        Random Number Generator
      </Typography>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <FormGroup>
          <OutlinedInput
            id="outlined-adornment-feet"
            endAdornment={<InputAdornment position="end">Lower Limit</InputAdornment>}
            aria-describedby="outlined-feet-helper-text"
            value={feet}
            onChange={(e) => setFeet(e.target.value)}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            inputProps={{
              'aria-label': 'feet',
            }}
          />
        </FormGroup>
        <FormGroup>
          <OutlinedInput
            id="outlined-adornment-inches"
            endAdornment={<InputAdornment position="end">Upper Limit</InputAdornment>}
            aria-describedby="outlined-inches-helper-text"
            value={inches}
            onChange={(e) => setInches(e.target.value)}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            inputProps={{
              'aria-label': 'inches',
            }}
          />
        </FormGroup>
        <Button variant="contained">Submit</Button>
        <Button onClick={() => {setFeet(''); setInches('')}}variant="contained" sx={{ml: 2, bgcolor: 'text.secondary'}}>Reset</Button>
      </Box>
      <Typography variant="p" component="p">
        {feet != ''  && `${feet}'`}
        {inches != ''  && `${inches}" `}
        {(feet != '' || inches != '') && `= ${calculateInches()} inches`}
      </Typography>
    </>
  );
}
