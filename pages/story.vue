<template>
  <div>
    <Header />
    <main>
      <div class="story">
        <div class="container">
          <h1 class="under-h1">
            Story<br><span>モンキーマウンテン ストーリー</span>
          </h1>
          <p><img src="../static/story/monkey.png" alt="Monkey Mountain イラスト"></p>
          <div class="story-sec">
            <div>
              <div>
                <h2>アメリカにて</h2>
                <p>
                  クラフトビール造りが盛んなオレゴン州の「海岸線」「森林」「大山」といった自然界で囲まれた魅力あるエリアで育ちました。<br>
                  20歳を過ぎて工学部を卒業し半導体エンジニアとしてのキャリアをスタートさせた後、さまざまな醸造所を訪れて風味の異なる一杯を楽しむうちに、「いつかは自分の店を持ちたい」と思うようになり、独学で醸造の世界に足を踏み入れました。その後約20年にわたってオリジナルビールづくりを楽しみました。
                </p>
              </div>
              <p><img src="../static/story/hop.png" alt="ホップ"></p>
            </div>
            <div>
              <div>
                <h2>日本へ</h2>
                <p>
                  しかし、2007年に日本に行くことになり、醸造を続けることができなくなりました。
                  醸造に厳しい規制があることを知らなかったのです。そこで、ビール醸造免許の取得を考えました。日本に来てからの10年間、私はクラフトビールを専門的に追求してきました。そしてある日、「自分の醸造所を持ちたい」という思いが止まらなくなり、ついに免許を取得することにしました。こうして私は、半導体技術者からビール醸造家へと転身したのです。
                </p>
              </div>
              <p><img src="../static/story/keggle.png" alt="釜"></p>
            </div>
            <div>
              <div>
                <h2>モンキーマウンテン誕生</h2>
                <p>
                  日本でも再度醸造ができないか夢見て過ごし、移住後11年間経って大分県大分市府内町のアクアパークという綺麗な公園の前に<br>
                  Monkey Mountainをオープンさせることができました。<br>
                  小さな醸造所ですが、少人数のスタッフと<br>
                  一緒に醸造を楽しんでいます。<br>
                  日本全国の人に私が醸造したビールをおいしく楽しく飲んでもらいたいと心から強く思っています。
                </p>
              </div>
              <p><img src="../static/story/story3.png" alt="ダレン氏"></p>
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
    title: 'Monkey Mountain Storyページ',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { hid: 'title', name: 'title', content: 'Monkey Mountain Storyページ' },
      { hid: 'og:title', property: 'og:title', content: 'Monkey Mountain Web Site Storyページ' },
      { hid: 'description', name: 'description', content: 'メイドインオオイタ 香りを楽しむクラフトビール。モンキーマウンテンは大分県大分市府内街にある小さな醸造所です。Monkey Moutainのストーリーをご紹介します。' },
      { hid: 'og:description', property: 'og:description', content: 'メイドインオオイタ 香りを楽しむクラフトビール。モンキーマウンテンは大分県大分市府内街にある小さな醸造所です。Monkey Moutainのストーリーをご紹介します。' },
      { hid: 'keywors', name: 'keywords', content: '大分クラフトビール, Monkey Mountain, モンキーマウンテン, クラフトビール, ビール, 醸造所, story' }
    ]
  }
}
</script>
