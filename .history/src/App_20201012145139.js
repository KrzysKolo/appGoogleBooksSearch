import React from 'react';
import './App.css';
import Header from './components/ui/Header'
import Search from './components/ui/Search'

function App() {
  const [queryTitle, setQueryTitle] = useState("")
  const [books, setBooks] = useState([])
  return (
    <div className="container">
      <Header/>
      <Search/>

    </div>
  );
}

export default App;
