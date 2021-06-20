<template>
  <div class="top-news">
    <h3 :key="category.id" class="top-sec2-title">
      {{ category.name }}
      <img src="../../static/top/monkey-illust.png" alt="Mokey Mountain ロゴ">
    </h3>
    <div class="container">
      <div v-for="post in posts" :key="post.id" class="top-news-area">
        <p><img :src="post._embedded['wp:featuredmedia'][0].source_url" :alt="post._embedded['wp:featuredmedia'][0].alt_text"></p>
        <nuxt-link :to="'/news/' + post.id">
          {{ post.title.rendered }}
        </nuxt-link>
        <p>{{ post.modified | moment }}</p>
      </div>
    </div>
    <p>
      <nuxt-link to="/news">
        NEWS一覧
      </nuxt-link>
    </p>
  </div>
</template>

<script>
import Vue from 'vue'
import moment from 'moment'
import axios from '../../axios-wp.js'
import axiosCat from '../../axios-categoy.js'
Vue.filter('moment', function (value) {
  const data = moment(value)
  return data.format('YYYY-MM-DD')
})
export default {
  name: 'NewsDetail',
  data () {
    return {
      posts: [],
      category: ''
    }
  },
  watchQuery: ['page'],
  created () {
    axios.get('/posts?categories=2&per_page=8&page=1&_embed=1')
      .then((response) => {
        this.posts = response.data
      })
    axiosCat.get()
      .then((response) => {
        this.category = response.data
      })
  }
}
</script>
