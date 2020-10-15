import React from 'react';
import BooksItem from './BooksItem'
import Loading from './../ui/Loading'
const BooksGrid = ({items, isLoading}) => {
    return isLoading ? <Loading/> : <section className="cards">
        {items.map((item, id) =>(
            <BooksItem key={id} item={item}></BooksItem>
        ))}
    </section>
}

export default BooksGrid;