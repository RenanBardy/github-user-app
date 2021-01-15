import axios from 'axios'

export default {
  searchUserByName
}

function searchUserByName (name: string): Promise<any> {
  return axios.request<void, any>({
    url: `https://api.github.com/search/users?q=${name}&per_page=10`,
    method: 'GET',
  })
  .then(({data}) => data)
}


// Normalize name before sending
// create a interface for request and response