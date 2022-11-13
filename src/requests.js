import axios from "axios";

export const getCategories = async () => {
    const URL='https://opentdb.com/api_category.php'
    const response = await axios.get(URL)
    return response
}

export const getQuestions = async (topic) => {
    const URL=`https://opentdb.com/api.php?type=multiple&amount=10&category=${topic}`
    const response = await axios.get(URL)
    return response
}    