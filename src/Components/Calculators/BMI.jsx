import React, { useState } from 'react';
import {
  OutlinedInput,
  FormControl,
  Button,
  FormHelperText,
  InputAdornment,
  Typography,
  FormGroup,
} from '@mui/material';
// 703 * weight / height^2

export default function BMI() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  function handleChange(e) {
    setWeight(e.target.value);
    setHeight(e.target.value);
  }

  function calculateBMI() {
    console.log(weight);
    console.log(height);
    return (703 * weight) / (height ^ 2);
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
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <FormGroup>
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">lbs</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
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
            inputProps={{
              'aria-label': 'height',
            }}
          />
          <FormHelperText id="outlined-height-helper-text">
            Height
          </FormHelperText>
        </FormGroup>
        <Button variant="contained">Contained</Button>
      </FormControl>
      </Box>
      <Typography variant="p" component="p">
        {weight != '' && height != '' && calculateBMI()}
      </Typography>
      {/* <input
        value={weight}
        onChange={handleChange}
        placeholder="Weight (in lbs)"
      />
      <p>You typed: {weight}</p>
      <button onClick={() => setWeight('')}>Reset</button> */}
    </>
  );
}
