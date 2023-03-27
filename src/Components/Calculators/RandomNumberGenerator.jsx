import React, { useState } from 'react';
import {
  OutlinedInput,
  Button,
  InputAdornment,
  Typography,
  FormGroup,
  Box,
} from '@mui/material';

export default function LowerToUpper() {
  const [lower, setLower] = useState('1');
  const [upper, setUpper] = useState('100');
  const [random, setRandom] = useState('');

  function randInt(min, max) {
    console.log(Math.floor(Math.random() * (max - min) ) + min)
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  function handleClick() {
    return randInt(lower, upper);
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
            id="outlined-adornment-lower"
            endAdornment={<InputAdornment position="end">Lower Limit</InputAdornment>}
            aria-describedby="outlined-lower-helper-text"
            value={lower}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            inputProps={{
              'aria-label': 'lower',
            }}
          />
        </FormGroup>
        <FormGroup>
          <OutlinedInput
            id="outlined-adornment-upper"
            endAdornment={<InputAdornment position="end">Upper Limit</InputAdornment>}
            aria-describedby="outlined-upper-helper-text"
            value={upper}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            inputProps={{
              'aria-label': 'upper',
            }}
          />
        </FormGroup>
        <Button variant="contained" onClick={handleClick}>Generate</Button>
        <Button onClick={() => {setLower(''); setUpper('')}} variant="contained" sx={{ml: 2, bgcolor: 'text.secondary'}}>Reset</Button>
      </Box>
      <Typography variant="p" component="p">
        {(lower != '' && upper != '') && `${random}`}
      </Typography>
    </>
  );
}
