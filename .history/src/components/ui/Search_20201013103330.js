import React from 'react'
const Search = ({handleSubmit , handleChangeTitle, queryTitle }) => {
    return (
        <section className='search'>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                    type='text'
                    className="form-control"
                    placeholder="Search characters"
                    value={queryTitle}
                    onChange={handleChangeTitle}
                    autoFocus/>
                <button className="btn">Search</button>
              </div>
              <div>

              <input
                type="text"
                id="search-input"
                class="form-control"
                placeholder="Szukaj..."
              />

              </div>
            </form>
        </section>
     );
}

export default Search;