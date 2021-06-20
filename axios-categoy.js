import axios from 'axios'

const wpUrlCategory = axios.create({
  baseURL: 'https://monkeymountain.sakura.ne.jp/wp/wp-json/wp/v2/categories/2'
})

export default wpUrlCategory
