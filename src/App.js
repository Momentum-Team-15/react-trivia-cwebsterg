// import 'bulma/css/bulma.min.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
const catUrl='https://opentdb.com/api_category.php'
let questionURL='https://opentdb.com/api.php?type=multiple&amount=10&category='


function App () {
  const [categories, setCategories] = useState([])
  const [selectedCategoryId, setSelectedCategoryID] = useState(null)
  
  const handleSelect = () => {
    setSelectedCategoryID(topic)
    console.log(topic)
  }
  useEffect(() => {
    axios.get(catUrl)
    .then(res => setCategories(res.data.trivia_categories))
    },[])
    // empty dependency array [] stops the infinite loop

  // useEffect(() => {
  //   axios.get
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Trial by Trivia</h1>
      </header>
      <div className="cat-container"></div>
        {categories.map((topic) => ( 
          <button className="category" onClick={handleSelect}><h4>{topic.name}</h4></button>
        ))}
    </div>
  );
}

export default App;
