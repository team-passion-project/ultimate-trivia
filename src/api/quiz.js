import axios from 'axios'

export const getQuestions = () => {
  return axios({
    url: 'https://quizapi.io/api/v1/questions',
    method: 'GET',
    headers: {
      'X-Api-Key': 'nGH80GscdalNLushkTrHMva7nw8l2kKXp9jv0mxr'
    }
  })
}