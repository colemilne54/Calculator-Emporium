import React, { useState } from 'react';
import ReactCurvedText from 'react-curved-text';
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
  var [bar, setBar] = useState('45');
  var [total, setTotal] = useState(bar);

  return (
    <>
      <Typography variant="h4" component="h2">
        Barbell Weight Calclator
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
            onChange={(e) => {setBar(e.target.value); setTotal(e.target.value);}}
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
        <br />
        <Typography variant="h5" component="h3">
        Add Weight
      </Typography>
        <Button
          onClick={() => {
            setTotal((total) => Number(total) + Number(50));
          }}
          id="donut-25"
          sx={{ mb: 2, mr: 2}}
        >
          25 lbs.
        </Button>
        <Button
          onClick={() => {
            setTotal((total) => Number(total) + Number(70));
          }}
          id="donut-35"
          sx={{ mb: 2, mr: 2}}
        >
          35 lbs.
        </Button>
        <Button
          onClick={() => {
            setTotal((total) => Number(total) + Number(90));
          }}
          id="donut-45"
          sx={{ mb: 2,}}
        >
          45 lbs.
        </Button>
        <br />
        <br />
        <Button variant="contained">Submit</Button>
        <Button
          onClick={() => {
            setTotal(bar);
          }}
          variant="contained"
          sx={{ ml: 2, bgcolor: 'text.secondary' }}
        >
          Reset
        </Button>
      </Box>
      <br />
      <Typography variant="p" component="p">
        {`Total Weight: ${total}`}
      </Typography>
    </>
  );
}
