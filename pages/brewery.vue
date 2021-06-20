<template>
  <div>
    <Header />
    <main>
      <div class="brewery">
        <div class="container">
          <h1 class="under-h1">
            Brewery<br><span>醸造所</span>
          </h1>
          <div class="brewery-sec">
            <p>
              私たちのビール醸造所は<br>
              大分県大分市にある府内町、５番地の<br>
              大通りにあるショッピングエリアから<br>
              １ブロック離れている場所に配置しております。<br>
              私達の醸造所は小さい為、<br>
              100から120の小リットルを1回分に醸造し、<br>
              小さな瓶詰め器具を使用しています。<br>
              そして、イースト(酵母)を<br>
              自分たちの手で培養しています。<br>
            </p>
          </div>
          <div class="brewery-sec2">
            <p><img src="../static/brewery/tank.png" alt="ホットリンカータンク"></p>
            <p>
              モンキーマウンテンでは、「ホットリカータンク」「マッシュタン」「ボイルケトル」<br>
              の3つのやかんで構成される醸造システムを使用しています。<br>
              このシステムでは、電気を使用して加熱しています。<br>
              最初に、ホットリカータンクを使ってお湯を沸かしていきます。<br>
              次に、マッシュタンで大麦麦芽とお湯を混ぜ、<br>
              麦芽に含まれるデンプンを糖に変え、ビールの素となる麦汁を造っていきます。<br>
              その後、液体（ワートと呼ばれる）が穀物から分離され、ボイルケトルに移していきます。<br>
              全ての麦汁をボイルケトルに移した後、煮沸中にホップスを加えていきます。
            </p>
            <div>
              <p><img src="../static/brewery/blueing.png" alt="マッシュタン"></p>
              <p><img src="../static/brewery/culture.png" alt="ポップス"></p>
            </div>
            <p><img src="../static/brewery/blueing2.png" alt="マッシュタン"></p>
            <p>
              煮沸を終えた後、麦汁を適温25度以下まで冷却させ、
              発酵タンクに移していきます。<br>
              発酵タンクに移し終えたら酵母を加え、<br>
              一定の温度22度で7-14日かけて発酵させていきます。<br>
              発酵終了後、樽に麦汁を移して炭酸を加え、<br>
              再び14日かけて冷やしていきます。<br>
              完成したビールは、瓶と樽から直接サーバーを通して提供しています。
            </p>
          </div>
          <div class="brewery-sec3">
            <p>
              醸造所内にて<br>Take Out<br>&<br>角打ち<br><span>OK</span>
              <img src="../static/brewery/monkey-iilust.png" alt="Monkey Moutain イラスト">
            </p>
            <p>
              醸造所内にてビールの販売&角打ちをしています。<br>
              醸造所はサーバのご提供もしています。<br>
              お気軽にお寄りください。
            </p>
            <div>
              <p><img src="../static/brewery/room.png" alt="室内"></p>
              <p><img src="../static/brewery/tap.png" alt="ビールサーバー"></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Monkey Mountain Brewary 醸造所ページ',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { hid: 'title', name: 'title', content: 'Monkey Mountain Brewaryページ' },
      { hid: 'og:title', property: 'og:title', content: 'Monkey Mountain Web Site Brewaryページ' },
      { hid: 'description', name: 'description', content: 'メイドインオオイタ 香りを楽しむクラフトビール。モンキーマウンテンは大分県大分市府内街にある小さな醸造所です。私たちのビール醸造所は大分県大分市にある府内町、５番地の大通りにあるショッピングエリアから１ブロック離れている場所に配置しております。私達の醸造所は小さい為、100から120の小リットルを1回分に醸造し、小さな瓶詰め器具を使用していますそして、イースト(酵母)を自分たちの手で培養しています。' },
      { hid: 'og:description', property: 'og:description', content: 'メイドインオオイタ 香りを楽しむクラフトビール。モンキーマウンテンは大分県大分市府内街にある小さな醸造所です。私たちのビール醸造所は大分県大分市にある府内町、５番地の大通りにあるショッピングエリアから１ブロック離れている場所に配置しております。私達の醸造所は小さい為、100から120の小リットルを1回分に醸造し、小さな瓶詰め器具を使用していますそして、イースト(酵母)を自分たちの手で培養しています。' },
      { hid: 'keywors', name: 'keywords', content: '大分クラフトビール, Monkey Mountain, モンキーマウンテン, クラフトビール, ビール, 醸造所, brewery ' }
    ]
  }
}
</script>
