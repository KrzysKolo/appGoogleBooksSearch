import React from 'react';
import BooksItem from './BooksItem'
import Loading from './../ui/Loading'
const BooksGrid = ({books, isLoading}) => {
    return isLoading ? <Loading/> : <section className="cards">
        {
        console.log(books)
        books.map((item, id)  => (
            <BooksItem key={id} item={item}></BooksItem>
        ))}
    </section>
}

export default BooksGrid;