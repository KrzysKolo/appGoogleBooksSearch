import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

//Ustawienia inputa
const useStyles = makeStyles((theme) => ({
    textField: {

      display: "block",
      padding: "10px",
      fontSize: "20px",
      border: 0,
      background: '#edeef9',
      color: '#454545',
      borderRadius: 5,
      margin: "auto",
      width: '40%',
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
                    id="standard-basic"
                    label="Search books"
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