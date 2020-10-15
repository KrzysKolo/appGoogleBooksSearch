import React from 'react';
import CharactersItem from './CharactersItem'
import Spiner from './../ui/Spiner'
const CharacterGrid = ({items, isLoading}) => {
    return isLoading ? <Spiner/> : <section className="cards">
        {items.map(item =>(
            <CharactersItem key={item.char_id} item={item}></CharactersItem>
        ))}
    </section>
}

export default CharacterGrid;