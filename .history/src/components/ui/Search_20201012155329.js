import React from 'react'
const Search = ({handleSubmit , handleChangeTitle, queryTitle }) => {
    return (
        <section className='search'>
            <form onSubmit={handleSubmit}>
            <input
                type='text'
                className="form-control"
                placeholder="Search characters"
                value={queryTitle}
                onChange={handleChangeTitle}
                autoFocus/>
                <button className="btn">Search</button>
            </form>
        </section>
     );
}

export default Search;