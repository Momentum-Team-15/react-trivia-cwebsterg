import 'bulma/css/bulma.min.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
const URL='https://opentdb.com/api_category.php'


function App () {
    const [triviaDB, setTriviaDB] = useState([])
    useEffect(() => {
        axios.get(URL)
        .then(data => setCategories(response.data))
    },[]
}
// response is just a string, could be e.g., "data" but the axios wrapper is called data (is this globally true?)
// if there was permission issue => create headers: {with authorization: information/token/whatever is needed I guess??}
// empty dependency array stops the infinite loop



// const axios = require('axios').default; -- ask amy what this

// request: initial landing page -conditionals optional
  // response: showCategories -(handleClick event)
    // request: askQuestion based on selectedCategory
      // response: askQuestion with allAnswers (both correct_ & incorrect_answers (shuffle@lodash)) & handleClick selectedAnswer
        // selectedAnswer








### What needs to happen?

- [ ] User arrives at homepage and is presented with a "list" of categories
- [ ] User sees a welcome message with some type of instructions
- [ ] User can select category
- [ ] User is shown a question
- [ ] User is able to select the answer
  - [ ] answers are shuffled so that the correct answer is not always in the same index
  - [ ] 
  - [ ] 
- [ ] User either gets correct/incorrect
- [ ] 
