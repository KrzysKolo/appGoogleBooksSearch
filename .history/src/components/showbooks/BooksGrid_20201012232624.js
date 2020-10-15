import React from 'react';
import BooksItem from './BooksItem'
import Loading from './../ui/Loading'
import AOS from 'aos';
const BooksGrid = ({books, isLoading}) => {
    AOS.init()
    return isLoading ? <Loading/> : <section className="cards" >
        {
        books.map((item, id)  => (
            <BooksItem key={id} item={item}></BooksItem>
        ))}
    </section>
}

export default BooksGrid;