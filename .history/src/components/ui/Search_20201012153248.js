import React, { useState } from 'react';

const Search = ({handleSubmit , setQueryTitle }) => {
    const [text, setText] = useState('')
    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }
    const handleChangeTitle = (e) => {
        const queryTitle = e.target.value;
        setText(queryTitle);
        setQueryTitle(queryTitle);
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