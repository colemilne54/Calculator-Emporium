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

  function calculateBMI() {
    return ((703 * total) / bar ** 2).toFixed(2);
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
        <Button
          onClick={() => {
            setTotal((total) => Number(total) + Number(90));
          }}
          className="donut"
          sx={{ mb: 2 }}
        >
          

        </Button>
        <ReactCurvedText width='100'
  height='100'
  cx='57'
  cy='-32'
  rx='100'
  ry='100'
  startOffset='127'
  reversed={false}
  text='45 lbs.'
  textProps={{"style": {"fontSize": 24}}}
  textPathProps={null}
  tspanProps={null}
  ellipseProps={null}
  svgProps={null} />
        <br />
        <Button variant="contained">Submit</Button>
        <Button
          onClick={() => {
            setTotal('');
          }}
          variant="contained"
          sx={{ ml: 2, bgcolor: 'text.secondary' }}
        >
          Reset
        </Button>
      </Box>
      <Typography variant="p" component="p">
        {`${total}`}
      </Typography>
    </>
  );
}
