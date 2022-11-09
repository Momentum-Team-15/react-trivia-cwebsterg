import 'bulma/css/bulma.min.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
const URL='https://opentdb.com/api_php?amount=10&category='


function App () {
  const [triviaDB, setTriviaDB] = useState([])

  useEffect(() => {
    axios.get(URL)
    .then(data => setCategories(response.data))
    },[]
  return (
    <div className="App">
      <header className="App-header">
        <h1>Trial by Trivia</h1>
      </header>
      <button className="category"></div>
    </div>
  );
}

export default App;
