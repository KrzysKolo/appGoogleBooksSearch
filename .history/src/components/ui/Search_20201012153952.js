import React, { useState } from 'react';

const Search = ({handleSubmit , setQueryTitle }) => {
    const [text, setText] = useState('')
    const handleChangeTitle = (e) => {
        const q = e.target.value;
        setText(q);
        setQueryTitle(q);
      }

    return (
        <section className='search'>
            <form onSubmit={handleSubmit}>
            <input
                type='text'
                className="form-control"
                placeholder="Search characters"
                value={text}
                onChange={handleChangeTitle}
                autoFocus/>
                <button className="btn">Search</button>
            </form>
        </section>
     );
}

export default Search;