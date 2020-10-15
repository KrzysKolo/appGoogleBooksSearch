import Axios from 'axios';
import React from 'react';
import './App.css';
import Header from './components/ui/Header'
import Search from './components/ui/Search'
import axios from 'axios'

function App() {
  const [queryTitle, setQueryTitle] = useState("")
  const [books, setBooks] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${queryTitle}`)
    .then(data => {
      setBooks(data.data.items)
    })
  }
  return (
    <div className="container">
      <Header/>
      <Search/>

    </div>
  );
}

export default App;
