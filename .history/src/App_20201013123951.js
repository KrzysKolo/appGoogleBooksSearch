
import React from 'react';
import './App.css';
import Header from './components/ui/Header'
import Search from './components/ui/Search'
import BooksGrid from './components/showbooks/BooksGrid'
import axios from 'axios'
import { useState } from 'react';



const App = () => {
  const [queryTitle, setQueryTitle] = useState("")
  const [queryAuthor, setQueryAuthor] = useState("")
  const [queryPublisher, setQueryPublisher] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [books, setBooks] = useState([])
  const [key, setKey] = useState('AIzaSyBkzHceQkoqGqmdrHlxzVWa9piN2ZQ1kTQ')
  const [err, setErr] = useState(false)

  const handleChangeTitle = (e) => {
    const queryTitle = e.target.value;
    setQueryTitle(queryTitle);
  }
  const handleChangeAuthor = (e) => {
    const queryAuthor = e.target.value;
    setQueryAuthor(queryAuthor);
  }
  const handleChangePublisher = (e) => {
    const queryPublisher = e.target.value;
    setQueryPublisher(queryPublisher);
  }
const showErr = () => {
  const err = "Musisz wpisać tytuł"
}
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setBooks([])
    setQueryTitle("")
    setQueryAuthor("")
    setQueryPublisher("")
    if(setQueryTitle===""){
      alert("Musisz wpisac tytuł");
    }
    axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${queryTitle}&inauthor=${queryAuthor}&inpublisher=${queryPublisher}:key=${key}&maxResults=20`)
    .then(data => {
      setBooks(data.data.items)
      setIsLoading(false)
    })

  }
  return (

    <div className="container">
      <Header />
      <Search handleSubmit={handleSubmit} queryTitle={queryTitle} queryAuthor={queryAuthor} queryPublisher={queryPublisher} handleChangeTitle={handleChangeTitle} handleChangeAuthor={handleChangeAuthor} handleChangePublisher={handleChangePublisher} />
      <BooksGrid isLoading={isLoading} books={books} />
    </div>
  );
}

export default App;
