import axios from 'axios'

const wpUrl = axios.create({
  baseURL: 'https://monkeymountain.sakura.ne.jp/wp/wp-json/wp/v2'
})

export default wpUrl
