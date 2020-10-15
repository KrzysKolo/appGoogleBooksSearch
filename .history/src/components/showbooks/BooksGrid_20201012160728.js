import React from 'react';
import BooksItem from './BooksItem'
import Loading from './../ui/Loading'
import { LocalDiningTwoTone } from '@material-ui/icons';
const BooksGrid = ({items, isLoading}) => {
    return isLoading ? <Loading/> : <section className="cards">
        {items.map((item, id) =>(
            <BooksItem key={id} item={item}></BooksItem>
        ))}
    </section>
}

export default BooksGrid;