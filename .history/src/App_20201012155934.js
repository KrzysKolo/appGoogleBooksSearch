
import React from 'react';
import './App.css';
import Header from './components/ui/Header'
import Search from './components/ui/Search'
import BooksGrid from './components/showbooks/BooksGrid'
import axios from 'axios'
import { useState } from 'react';

function App() {
  const [queryTitle, setQueryTitle] = useState("")
  const [books, setBooks] = useState([])
  const handleChangeTitle = (e) => {
    const queryTitle = e.target.value;
    setQueryTitle(queryTitle);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${queryTitle}`)
    .then(data => {
      setBooks(data.data.items)
      setBooks(data.data.items)
      console.log(data);
    })
  }
  return (
    <div className="container">
      <Header />
      <Search handleSubmit={handleSubmit} queryTitle={queryTitle} handleChangeTitle={handleChangeTitle} />

    </div>
  );
}

export default App;
