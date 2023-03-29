import React, { useState } from 'react';
import {
  OutlinedInput,
  Button,
  FormHelperText,
  InputAdornment,
  Typography,
  FormGroup,
  Box,
} from '@mui/material';

export default function BarbellTotal() {
  const [total, setTotal] = useState('');
  const [bar, setBar] = useState('45');

  function calculateBMI() {
    return ((703 * total) / (bar ** 2)).toFixed(2);
  }

  return (
    <>
      <Typography variant="h4" component="h2">
        BMI
      </Typography>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        {/* <FormGroup>
          <OutlinedInput
            id="outlined-adornment-total"
            endAdornment={<InputAdornment position="end">lbs</InputAdornment>}
            aria-describedby="outlined-total-helper-text"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            // https://stackoverflow.com/questions/43687964/only-numbers-input-number-in-react
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            inputProps={{
              'aria-label': 'total',
            }}
          />
          <FormHelperText id="outlined-total-helper-text">
            Total
          </FormHelperText>
        </FormGroup> */}
        <FormGroup>
          <OutlinedInput
            id="outlined-adornment-bar"
            endAdornment={<InputAdornment position="end">lbs</InputAdornment>}
            aria-describedby="outlined-bar-helper-text"
            value={bar}
            onChange={(e) => setBar(e.target.value)}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            inputProps={{
              'aria-label': 'bar',
            }}
          />
          <FormHelperText id="outlined-bar-helper-text">
            Bar Weight
          </FormHelperText>
        </FormGroup>
        <Button variant="contained">Submit</Button>
        <Button onClick={() => {setTotal(''); setBar('')}}variant="contained" sx={{ml: 2, bgcolor: 'text.secondary'}}>Reset</Button>
      </Box>
      <Typography variant="p" component="p">
        {total != '' && bar != '' && `BMI:  ${total}`}
      </Typography>
    </>
  );
}
