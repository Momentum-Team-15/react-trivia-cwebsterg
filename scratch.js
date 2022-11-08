import 'bulma/css/bulma.min.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
const URL='https://opentdb.com/api_category.php'

function App () {
    const [xData, setXData] = useState([])
    useEffect(() => {
        axios.get(URL)
        .then(data => console.log(response.data))
        // response is just a string, could be e.g., "data" but the axios wrapper is called data (is this globally true?)
        // if there was permission issue => create headers: {with authorization: information/token/whatever is needed I guess??}
    },[]
    // empty dependency array stops the infinite loop
}
