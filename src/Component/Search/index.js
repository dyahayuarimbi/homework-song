import React, { useState } from "react";
import config from "../../lib/config";
import { useSelector } from "react-redux";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import "./index.css";

const Search= ({ onSuccess}) =>{
  const accessToken = useSelector((state)=>state.auth.accessToken);

const [text,setText] = useState('')
const handleInput=(e)=>{
    setText(e.target.value)
}
const onSubmit = async (e) => {
    e.preventDefault();

    const requestOptions = {
      headers: {
        'Authorization': 'Bearer ' + accessToken,
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await fetch(`${config.SPOTIFY_BASE_URL}/search?type=track&q=${text}`, requestOptions)
        .then((data) => data.json());

      const tracks = response.tracks.items;
      onSuccess(tracks);
    } catch (e) {
      alert(e);
    }
}

const theme = createTheme({
  Search: {
    Search: {
      // Purple and green play nicely together.
      main: purple[500],
    },
  },
});

    return(
        <form className='form-search' onSubmit={onSubmit}>
        <TextField id="outlined-basic" label="Search Artist or Song" className='form-input' onChange={handleInput}/>
        <ThemeProvider theme={theme}>
          <Button type="submit" variant="contained" className="search-form">Search</Button>
        </ThemeProvider>
        </form>
    )
    }

 export default Search;