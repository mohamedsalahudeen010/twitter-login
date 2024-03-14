import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

export default function DateSelects() {
const[date,setDate]=React.useState("");
const[month,setMonth]=React.useState("");
  const handleChange = (event) => {
    setDate(event.target.value);
  };
  return (
    <div>
      <FormControl  variant="standard" sx={{ minWidth: "30%" }}>
        <InputLabel sx={{ m: 1 }} htmlFor="demo-customized-textbox">Date</InputLabel>
        <BootstrapInput id="demo-customized-textbox"
        value={date} 
        sx={{ minWidth: "30%" }}
        onChange={(e)=>setDate(e.target.value)}/>
      </FormControl>
      <FormControl sx={{ minWidth: "20%" }} variant="standard">
        <InputLabel sx={{ m: 1 }}  id="demo-customized-select-label">Month</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={date}
          onChange={(e)=>setMonth(e.target.value)}
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"January"}>January</MenuItem>
          <MenuItem value={"February"}>February</MenuItem>
          <MenuItem value={"March"}>March</MenuItem>
          <MenuItem value={"April"}>April</MenuItem>
          <MenuItem value={"May"}>May</MenuItem>
          <MenuItem value={"June"}>June</MenuItem>
          <MenuItem value={"July"}>July</MenuItem>
          <MenuItem value={"August"}>August</MenuItem>
          <MenuItem value={"September"}>September</MenuItem>
          <MenuItem value={"October"}>October</MenuItem>
          <MenuItem value={"November"}>November</MenuItem>
          <MenuItem value={"December"}>December</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: "20%" }} variant="standard">
        <InputLabel sx={{ m: 1 }}  htmlFor="demo-customized-select-native">Year</InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          value={month}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option aria-label="None" value="" />
          <option value={10}>1980</option>
          <option value={20}>1981</option>
          <option value={30}>1982</option>
          <option value={10}>1983</option>
          <option value={20}>1984</option>
          <option value={30}>1985</option>
          <option value={10}>1986</option>
          <option value={20}>1987</option>
          <option value={30}>1988</option>
          <option value={10}>1989</option>
          <option value={20}>1990</option>
          <option value={30}>1991</option>
          <option value={10}>1992</option>
          <option value={20}>1993</option>
          <option value={30}>1994</option>
          <option value={10}>1995</option>
          <option value={20}>1996</option>
          <option value={30}>1997</option>
          <option value={10}>1998</option>
          <option value={20}>1999</option>
          <option value={30}>2000</option>
          <option value={10}>2001</option>
          <option value={20}>2002</option>
          <option value={30}>2003</option>
          <option value={10}>2004</option>
          <option value={20}>2005</option>
          <option value={30}>2006</option>
          <option value={30}>2007</option>
          <option value={10}>2008</option>
          <option value={20}>2009</option>
          <option value={30}>2010</option>
          <option value={10}>2011</option>
          <option value={20}>2012</option>
          <option value={30}>2013</option>
          <option value={10}>2014</option>
          <option value={20}>2015</option>
          <option value={30}>2016</option>
          <option value={10}>2017</option>
          <option value={20}>2018</option>
          <option value={30}>2019</option>
          <option value={10}>2020</option>
          <option value={20}>2021</option>
          <option value={30}>2022</option>
          <option value={20}>2023</option>
          <option value={30}>2024</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}
