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

export default function BarbellWeight() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  function calculateBMI() {
    return ((703 * weight) / (height ** 2)).toFixed(2);
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
        <FormGroup>
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">lbs</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            // https://stackoverflow.com/questions/43687964/only-numbers-input-number-in-react
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="outlined-weight-helper-text">
            Weight
          </FormHelperText>
        </FormGroup>
        <FormGroup>
          <OutlinedInput
            id="outlined-adornment-height"
            endAdornment={<InputAdornment position="end">in</InputAdornment>}
            aria-describedby="outlined-height-helper-text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            inputProps={{
              'aria-label': 'height',
            }}
          />
          <FormHelperText id="outlined-height-helper-text">
            Height
          </FormHelperText>
        </FormGroup>
        <Button variant="contained">Submit</Button>
        <Button onClick={() => {setWeight(''); setHeight('')}}variant="contained" sx={{ml: 2, bgcolor: 'text.secondary'}}>Reset</Button>
      </Box>
      <Typography variant="p" component="p">
        {weight != '' && height != '' && `BMI:  ${calculateBMI()}`}
      </Typography>
    </>
  );
}
