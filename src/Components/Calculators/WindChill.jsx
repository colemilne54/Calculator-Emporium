import React, { useState } from 'react';
import {
  OutlinedInput,
  Button,
  FormHelperText,
  InputAdornment,
  Typography,
  FormGroup,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

var tempArr = [];

for(var i=40; i>=-45; i-=5) {
  tempArr.push(i);
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];



function FrostBiteChart() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="frostbite table">
        <TableHead>
          <TableRow>
            <TableCell>Calm</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

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
      <FrostBiteChart />
    </>
  );
}

