import React from 'react';
import AOS from 'aos';
const BooksItem = ({ item } ) => {
  AOS.init()
  return (
    <div className='card' data-aos="fade-up" data-aos-duration="3000">
    <div className='card-inner'>
        <div className='card-front'>
            <div className="card__front-title">
              <h2>{item.volumeInfo.title}</h2>
            </div>
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
              <strong>Description:</strong>{item.volumeInfo.description};


            </li>
          </ul>
          </div>
            </div>
          </div>
        );
}

export default BooksItem;