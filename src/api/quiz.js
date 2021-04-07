import axios from 'axios'
import apiUrl from '../apiConfig'
import os from '../../.env'


export const getQuestions = () => {
  return axios({
    url: apiUrl,
    method: 'GET',
    headers: {
      'X-Api-Key': os.getenv('apiKey')
    }
  })
}
