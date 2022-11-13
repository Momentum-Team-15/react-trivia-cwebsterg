import "./App.css";
// import 'bulma/css/bulma.min.css';
import { useState, useEffect } from "react";
import { getCategories } from "./components/requests";
import { Categories } from "./components/categories";
import { Questions } from "./components/questions";

const App = () => {
  const [category, setCategory] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  useEffect(() => {
    getCategories().then((response) =>
      setCategory(response.data.trivia_categories)
    );
  }, []);

  return (
    <div className="container">
      <header className="hero is-primary">
        <h1 className="hero-body title has-text-centered">Trial by Trivia</h1>
      </header>

      <div>
        {selectedCategoryId ? (
          <Questions
            selectedCategoryID={selectedCategoryId}
            setSelectedCategoryId={setSelectedCategoryId}
          />
        ) : (
          <>
            <Categories
              category={category}
              setSelectedCategoryId={setSelectedCategoryId}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
