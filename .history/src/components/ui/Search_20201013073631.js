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

              <input
                type="text"
                id="search-input"
                class="form-control"
                placeholder="Szukaj..."
              />
              <select select name="select" class="select" id="search-option">
                <option selected value="wybierz">wybierz...</option>
                <option value="authors">Author</option>
                <option value="publisher">Stolica</option>
              </select>
                <button className="btn">Search</button>
            </form>
        </section>
     );
}

export default Search;