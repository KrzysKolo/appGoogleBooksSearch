
import React from 'react';
import './App.css';
import Header from './components/ui/Header'
import Search from './components/ui/Search'
import BooksGrid from './components/showbooks/BooksGrid'
import axios from 'axios'
import { useState } from 'react';
import AOS from 'aos';


const App = () => {
  const [queryTitle, setQueryTitle] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [books, setBooks] = useState([])
  const handleChangeTitle = (e) => {
    const queryTitle = e.target.value;
    setQueryTitle(queryTitle);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setBooks([])
    setQueryTitle("")
    axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${queryTitle}`)
    .then(data => {
      setBooks(data.data.items)
      setBooks(data.data.items)
      setIsLoading(false)
      console.log(data);
    })

  }
  return (

    <div className="container">
      <Header />
      <Search handleSubmit={handleSubmit} queryTitle={queryTitle} handleChangeTitle={handleChangeTitle} />
      <BooksGrid isLoading={isLoading} books={books} />

    </div>
  );
}

export default App;
