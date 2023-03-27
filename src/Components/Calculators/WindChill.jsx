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

// 

export default function WindChill() {
  const [temp, setTemp] = useState('');
  const [wind, setWind] = useState('');

  function calculateWindChill() {
    // https://www.weather.gov/ama/WindChill
    return (35.74 + 0.6215*temp - 35.75*wind**.16 + 0.4275*temp*wind**.16).toFixed(2) + "°F";
  }

  return (
    <>
      <Typography variant="h4" component="h2">
        Wind Chill
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
            id="outlined-adornment-temp"
            endAdornment={<InputAdornment position="end">°F</InputAdornment>}
            aria-describedby="outlined-temp-helper-text"
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            inputProps={{
              'aria-label': 'temp',
            }}
          />
          <FormHelperText id="outlined-temp-helper-text">
            Temperature
          </FormHelperText>
        </FormGroup>
        <FormGroup>
          <OutlinedInput
            id="outlined-adornment-wind"
            endAdornment={<InputAdornment position="end">mph</InputAdornment>}
            aria-describedby="outlined-wind-helper-text"
            value={wind}
            onChange={(e) => setWind(e.target.value)}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            inputProps={{
              'aria-label': 'wind',
            }}
          />
          <FormHelperText id="outlined-wind-helper-text">
            Wind Speed
          </FormHelperText>
        </FormGroup>
        <Button variant="contained">Submit</Button>
        <Button onClick={() => {setTemp(''); setWind('')}}variant="contained" sx={{ml: 2, bgcolor: 'text.secondary'}}>Reset</Button>
      </Box>
      <Typography variant="p" component="p">
        {(temp != '' && wind != '') && `${calculateWindChill()}`}
      </Typography>
    </>
  );
}
