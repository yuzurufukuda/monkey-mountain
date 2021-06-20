<template>
  <div class="top-slide">
    <div class="container">
      <h1>メイドインオオイタ 香りを楽しむクラフトビール</h1>
      <div class="slick">
        <client-only>
          <slick ref="slick" :options="slickOptions">
            <p><img src="@/assets/top/top-slide.jpg" alt="Monkey Moutain ロゴ"></p>
            <p><img src="@/assets/top/top-slide2.jpg" alt="ビール瓶の蓋"></p>
            <p><img src="@/assets/top/top-slide3.jpg" alt="クラフトビール"></p>
            <p><img src="@/assets/top/top-slide4.jpg" alt="クラフトビール"></p>
          </slick>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/default
export default {
  data () {
    return {
      slickOptions: {
        arows: false,
        dots: true,
        autoplay: true,
        speed: 500,
        slideToShow: 1,
        swipe: true,
        vertical: false,
        verticalSwiping: false,
        prevArrow: false,
        nextArrow: false
      }
    }
  }
}
</script>
