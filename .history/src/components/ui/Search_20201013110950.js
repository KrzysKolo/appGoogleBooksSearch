import React from 'react'
const Search = ({handleSubmit , handleChangeTitle, handleChangeAuthor, handleChangePublisher, queryTitle, queryAuthor, queryPublisher }) => {
    return (
        <section className='search'>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                    type='text'
                    className="form-control"
                    placeholder="Title"
                    value={queryTitle}
                    onChange={handleChangeTitle}
                    autoFocus/>
                <button className="btn">Search</button>
              </div>
              <div>

              <input
                 type='text'
                 className="form-control"
                 placeholder="Author"
                 value={queryAuthor}
                 onChange={handleChangeAuthor}
                 autoFocus/>
              <input
                 type='text'
                 className="form-control"
                 placeholder="Publisher"
                 value={queryPublisher}
                 onChange={handleChangePublisher}
                 autoFocus/>

              </div>
            </form>
        </section>
     );
}

export default Search;