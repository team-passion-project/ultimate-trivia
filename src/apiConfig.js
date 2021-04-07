let apiUrl
const apiUrls = {
  production: 'https://quizapi.io/api/v1/questions1',
  development: 'https://quizapi.io/api/v1/questions1'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
