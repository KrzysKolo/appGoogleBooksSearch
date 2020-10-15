import React from 'react';
const BooksItem = ({ item } ) => {
  return (
    <div className='card'>
    <div className='card-inner'>
        <div className='card-front'>
          <h2 className="card__front-title">{item.volumeInfo.title}</h2>
            <img src={item.volumeInfo.imageLinks.thumbnail} alt={item.volumeInfo.title}/>
        </div>
        <div className='card-back'>
          <h1>{item.volumeInfo.title}</h1>
          <ul>
            <li>
              <strong>Title:</strong> {item.volumeInfo.title}
            </li>
            <li>
              <strong>Author Name:</strong> {item.volumeInfo.authors}
            </li>
            <li>
              <strong>Published:</strong> {item.volumeInfo.publishedDate}
            </li>
            <li>
              <strong>Description:</strong> {item.volumeInfo.description}
            </li>
          </ul>
          </div>
            </div>
          </div>
        );
}

export default BooksItem;