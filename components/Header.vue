<template>
  <header>
    <nav class="pc">
      <div class="header-pc container">
        <div class="menu-pc">
          <figure><a href=""><img src="../static/monkey_logo.jpg" alt="Monkey Moutain ロゴ"></a></figure>
          <p>
            <nuxt-link to="/">
              モンキーマウンテンとは？<span>About us</span>
            </nuxt-link>
          </p>
          <p>
            <nuxt-link to="/brewery">
              醸造所<span>Brewery</span>
            </nuxt-link>
          </p>
          <p>
            <nuxt-link to="/story">
              ストーリー<span>Story</span>
            </nuxt-link>
          </p>
          <p>
            <nuxt-link to="/lineup">
              ラインナップ<span>Line up</span>
            </nuxt-link>
          </p>
          <p><a href="/shopping">ショピング<span>Shopping</span></a></p>
          <p>
            <nuxt-link to="/news">
              お知らせ<span>News</span>
            </nuxt-link>
          </p>
        </div>
        <Sns-area />
      </div>
    </nav>
  </header>
</template>
