import React from 'react';
import BooksItem from './BooksItem'
import Loading from './../ui/Loading'
import AOS from 'aos';
const BooksGrid = ({books, isLoading}) => {
    AOS.init()
    return isLoading ? <Loading/> : <section className="cards"  data-aos="fade-up" data-aos-duration="3000" >
        {
        books.map((item, id)  => (
            <BooksItem key={id} item={item}></BooksItem>
        ))}
    </section>
}

export default BooksGrid;