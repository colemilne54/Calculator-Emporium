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

export default function DogYears() {
  const [years, setYears] = useState('');
  const [months, setMonths] = useState('');

  function calculateDogYears() {
    const yrs = Number(years)+Number(months/12);
    return (Number(16)*Math.log(yrs) + Number(31)).toFixed(2);
  }

  return (
    <>
      <Typography variant="h4" component="h2">
        Dog Years
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
            id="outlined-adornment-years"
            endAdornment={<InputAdornment position="end">yr</InputAdornment>}
            aria-describedby="outlined-years-helper-text"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            onKeyPress={(event) => {
              if (!/[1-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            inputProps={{
              'aria-label': 'years',
            }}
          />
          <FormHelperText id="outlined-years-helper-text">
            Years
          </FormHelperText>
        </FormGroup>
        <FormGroup>
          <OutlinedInput
            id="outlined-adornment-months"
            endAdornment={<InputAdornment position="end">mos</InputAdornment>}
            aria-describedby="outlined-months-helper-text"
            value={months}
            onChange={(e) => setMonths(e.target.value)}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            inputProps={{
              'aria-label': 'months',
            }}
          />
          <FormHelperText id="outlined-months-helper-text">
            Months
          </FormHelperText>
        </FormGroup>
        <Button variant="contained">Submit</Button>
        <Button onClick={() => {setYears(''); setMonths('')}}variant="contained" sx={{ml: 2, bgcolor: 'text.secondary'}}>Reset</Button>
      </Box>
      <Typography variant="p" component="p">
        {(years != '' || months != '') && `${calculateDogYears()}`}
      </Typography>
    </>
  );
}
