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
  const [lower, setLower] = useState('');
  const [upper, setUpper] = useState('');

  function calculateUpper() {
    return Number(lower)*12+Number(upper);
  }

  function handleClick() {

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
            onChange={(e) => setLower(e.target.value)}
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
            onChange={(e) => setUpper(e.target.value)}
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
        <Button variant="contained" onClick={handleClick}>Submit</Button>
        <Button onClick={() => {setLower(''); setUpper('')}}variant="contained" sx={{ml: 2, bgcolor: 'text.secondary'}}>Reset</Button>
      </Box>
      <Typography variant="p" component="p">
        {lower != ''  && `${lower}'`}
        {upper != ''  && `${upper}" `}
        {(lower != '' || upper != '') && `= ${calculateUpper()} upper`}
      </Typography>
    </>
  );
}
