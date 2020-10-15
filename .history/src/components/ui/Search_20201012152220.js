import React, { useState } from 'react';

const Search = ({handleSubmit , setQueryTitle }) => {
    const [text, setText] = useState('')
    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return (
        <section className='search'>
            <form onSubmit={handleSubmit}>
            <input
                type='text'
                className="form-control"
                placeholder="Search characters"
                value={text}
                onChange={(e) => onChange(e.target.value)}
                autoFocus/>
                <button className="btn">Search</button>
            </form>
        </section>
     );
}

export default Search;