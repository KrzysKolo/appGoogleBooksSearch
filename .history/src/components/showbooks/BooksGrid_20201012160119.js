import React from 'react';
import BooksItem from './BooksItem'
import Spiner from './../ui/Spiner'
const BooksGrid = ({items, isLoading}) => {
    return isLoading ? <Spiner/> : <section className="cards">
        {items.map(item =>(
            <BooksItem key={item.char_id} item={item}></BooksItem>
        ))}
    </section>
}

export default BooksGrid;