import axios from 'axios'
import { flatten } from 'utils/string'

export default {
  searchUserByName
}

function searchUserByName (name: string): Promise<any> {
  return axios.request<void, any>({
    url: `https://api.github.com/search/users?q=${flatten(name)}&per_page=10`,
    method: 'GET',
  })
  .then(({data}) => data)
}
