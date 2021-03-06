import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

//Ustawienia inputa
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      display: block;
      padding: 10px;
      font-size: 20px;
      border: 0;
      border-radius: 5px;
      width: 60%;
      margin: auto;
    },
  }));




const Search = ({ getQuery }) => {
    const [text, setText] = useState('')
    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }
    const classes = useStyles();
    return (
        <section className='search'>
            <form>
                <TextField
                    label="Search books"
                    id="margin-none"
                    defaultValue="search title"
                    className={classes.textField}
                    />


                <input
                type='text'
                className="form-control"
                placeholder="Search characters"
                value={text}
                onChange={(e) => onChange(e.target.value)}
                autoFocus/>
            </form>

        </section>
     );
}

export default Search;