import React from 'react'
const Search = ({handleSubmit , handleChangeTitle, handleChangeAuthor, handleChangePublisher, queryTitle, queryAuthor, queryPublisher }) => {
    return (
        <section className='search'>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <input
                    type='text'
                    className="form-control big-size"
                    placeholder="Title"
                    value={queryTitle}
                    onChange={handleChangeTitle}
                    autoFocus/>
                <button className="btn">Search</button>
              </div>
              <div className="row">
                <input
                  type='text'
                  className="form-control small-size"
                  placeholder="Author"
                  value={queryAuthor}
                  onChange={handleChangeAuthor}
                  autoFocus/>
                <input
                  type='text'
                  className="form-control small-size"
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