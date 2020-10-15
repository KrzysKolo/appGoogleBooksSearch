
import React from 'react';
import './App.css';
import Header from './components/ui/Header'
import Search from './components/ui/Search'
import BooksGrid from './components/showbooks/BooksGrid'
import Error from './components/ui/Error'
import axios from 'axios'
import { useState } from 'react';



const App = () => {
  const [queryTitle, setQueryTitle] = useState("")
  const [queryAuthor, setQueryAuthor] = useState("")
  const [queryPublisher, setQueryPublisher] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [books, setBooks] = useState([])
  const [key, setKey] = useState('AIzaSyBkzHceQkoqGqmdrHlxzVWa9piN2ZQ1kTQ')
  const [isErr, setIsErr] = useState(false)

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

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setBooks([])
    setQueryTitle("")
    setQueryAuthor("")
    setQueryPublisher("")
    if(setQueryTitle !=="" && setQueryAuthor !=="" && setQueryPublisher !==""){
      axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${queryTitle}&inauthor=${queryAuthor}&inpublisher=${queryPublisher}:key=${key}&maxResults=20`)
      .then(data => {
        setBooks(data.data.items)
        setIsLoading(false)
      })
      .catch (err =>{
        setIsErr(`Wystąpił problem ${err}`)
        setIsLoading(false)
      })

    }
    else if (setQueryTitle !=="" && setQueryAuthor !=="" && setQueryPublisher ===""){
      axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${queryTitle}&inauthor=${queryAuthor}:key=${key}&maxResults=20`)
      .then(data => {
        setBooks(data.data.items)
        setIsLoading(false)
      })
      .catch (err =>{
        setIsErr(`Wystąpił problem ${err}`)
        setIsLoading(false)
      })
    }
    else if (setQueryTitle !=="" && setQueryAuthor =="" && setQueryPublisher !==""){
      axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${queryTitle}&inpublisher=${queryPublisher}:key=${key}&maxResults=20`)
      .then(data => {
        setBooks(data.data.items)
        setIsLoading(false)
      })
      .catch (err =>{
        setIsErr(`Wystąpił problem ${err}`)
        setIsLoading(false)
      })
      console.log(data.data.items)
      console.log(data.data.items)
    }
    else {
      setIsErr(`Musisz podać tytuł książki`)
      setIsLoading(false)
    }

  }
  return (

    <div className="container">
      <Header />
      <Search handleSubmit={handleSubmit} queryTitle={queryTitle} queryAuthor={queryAuthor} queryPublisher={queryPublisher} handleChangeTitle={handleChangeTitle} handleChangeAuthor={handleChangeAuthor} handleChangePublisher={handleChangePublisher} />
      <BooksGrid isLoading={isLoading} books={books} />
      <Error isErr={isErr}/>
    </div>
  );
}

export default App;
