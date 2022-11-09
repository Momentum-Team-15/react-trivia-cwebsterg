
// response is just a string, could be e.g., "data" but the axios wrapper is called data (is this globally true?)
// if there was permission issue => create headers: {with authorization: information/token/whatever is needed I guess??}
// empty dependency array stops the infinite loop



// const axios = require('axios').default; -- ask amy what this

// request: initial landing page -conditionals optional
  // response: showCategories -(handleClick event)
    // request: askQuestion based on selectedCategory
      // response: askQuestion with allAnswers (both correct_ & incorrect_answers (shuffle@lodash)) & handleClick selectedAnswer
        // selectedAnswer







