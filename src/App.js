import './App.css';
import 'bulma/css/bulma.min.css';
import { useState, useEffect } from 'react';
import { getCategories } from './requests';
import { Categories} from './components/categories';
import { Questions } from './components/questions';


function App () {
  const [category, setCategory] = useState([])
  const [selectedCategoryId, setSelectedCategoryId] = useState(null)
  
  useEffect(() => {
    requestCategories()
    .then(res => setCategory(res.data.trivia_categories))};

  return (
    <div className="container">
      <header className="hero is-primary">
        <h1 className="hero-body title has-text-centered">Trial by Trivia</h1>
      </header>
      <div className="cat-container"></div>
        {categories.map((topic) => ( 
          <button className="category" onClick={handleSelect}><h4>{topic.name}</h4></button>
        ))}
    </div>
  );
}

export default App;
