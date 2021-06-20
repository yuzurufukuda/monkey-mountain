<template>
  <footer>
    <div class="container">
      <div class="footer-area">
        <div>
          <h5>お問い合わせ</h5>
          <p><img src="@/assets/top/top-sec-logo.png" alt="Monkey Moutain ロゴ"></p>
          <p>株式会社MONKEY MOUNTAIN</p>
          <p>tel:097-510-5501<br>〒870-0021<br>大分県大分市府内町2丁目4番15号 若竹ビル105</p>
        </div>
        <div>
          <h5>サイトマップ</h5>
          <p>
            <nuxt-link to="/">
              モンキーマウンテンとは？
            </nuxt-link>
          </p>
          <p>
            <nuxt-link to="/brewery">
              ブルワリー
            </nuxt-link>
          </p>
          <p>
            <nuxt-link to="/story">
              モンキーマウンテンストーリー
            </nuxt-link>
          </p>
          <p>
            <nuxt-link to="/lineup">
              ラインナップ
            </nuxt-link>
          </p>
          <p>
            <nuxt-link to="/company">
              会社案内
            </nuxt-link>
          </p>
          <p>
            <nuxt-link to="/shoplist">
              モンキーマウンテン取扱店
            </nuxt-link>
          </p>
          <p>
            <nuxt-link to="/contact">
              新規取扱・業務店様向けの問い合わせ
            </nuxt-link>
          </p>
          <p>
            <nuxt-link to="/news">
              お知らせ
            </nuxt-link>
          </p>
        </div>
        <div>
          <p>
            <a href="mailto:info@monkeybeer.co.jp?subject=卸売カタログ請求" target="_blank">
              <img src="@/assets/top/footer-button.png" alt="卸売情報">
            </a>
          </p>
          <p>
            <nuxt-link to="/contact">
              <img src="@/assets/top/contact-button.png" alt="お問い合わせ">
            </nuxt-link>
          </p>
          <SnsAreaFooter />
        </div>
      </div>
      <small>©2021 株式会社MONKEY MOUNTAIN. All Rights Reserved.</small>
    </div>
  </footer>
</template>
