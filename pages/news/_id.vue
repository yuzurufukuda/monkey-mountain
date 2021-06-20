<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.modified | moment }}</p>
    <p><img :src="post._embedded['wp:featuredmedia'][0].source_url"></p>
    <p>{{ post.content }}</p>
  </div>
</template>

<script>
import Vue from 'vue'
import moment from 'moment'
import axios from '../../axios-wp.js'
Vue.filter('moment', function (value) {
  const data = moment(value)
  return data.format('YYYY-MM-DD')
})
export default {
  async asyncData ({ params }) {
    const { data } = await
    axios.get('/posts/' + params.id + '?_embed=1')
    return { post: data }
  }
}
</script>
