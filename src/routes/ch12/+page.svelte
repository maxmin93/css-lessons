<svelte:head>
  <title>CSS 12: Columns</title>
</svelte:head>

<main>
  <section class="columns">
    <p>
      시계가 밤 10시를 넘어가자 <span>남기연</span>은 자세를 바로하고 현관문 쪽에 섰다. 거의 육십 년 만에 어머니를
      만나는 것이라서 그런지 같은
      <span>사신(四神)</span>에 속해 있던, 마교의 교주인
      <span>구천마신</span>을 상대했을 때보다 더 심장이 뛰고 있었다. 생사결을 겨루는 자리도 아닌데 말이다.
    </p>
    <p>
      달칵. 하지만 안타깝게도 그의 손은 허공을 휘젓고 말았다. 너무나 절묘한 타이밍으로 남기연이 목을 뒤로 뺐기 때문이다.
    </p>
    <!-- <h2>Next Topic</h2> -->
    <p class="quote">&ldquo; Where's my rug, man? &rdquo; <span class="nowrap">&mdash; The Dude</span></p>
    <p>잠시 후 잠겨 있던 문이 열리며 사십대 후반으로 보이는, 얼굴에 주름이 가득한 중년여인이 안으로 들어왔다.</p>
    <p>김경윤을 내버려두고 남기연에게 다가온 박대한이 어처구니없다는 표정을 지었다.</p>
  </section>
  <p>
    그리고 그건 항상 몰려다니던 다른 두 명도 마찬가지였다. 한데 그 기세가 심상치 않은지 여전히 어깨동무 상태이던
    김경윤이 숨을 들이켰다.
  </p>
  <p>그들이 기억하는 남기연은 너무 조용해서 존재감이 없는, 말 그대로 평범하기 짝이 없는 녀석이었기 때문이다.</p>
  <p>휘이익! 박대한이 손을 뻗었다.</p>
</main>

<style lang="postcss">
  p {
    padding-bottom: 1.5rem;
  }

  section {
    background-color: bisque;
    display: flow-root; /* 이쪽이 더 현대적인 방법 */
  }

  .columns {
    columns: 4 240px;
    column-rule: 3px solid #333;
    column-gap: 3rem;
    break-inside: avoid;

    p {
      margin-top: 0;
    }

    h2 {
      margin-top: 0;
      background-color: #333;
      color: whitesmoke;
      padding: 1rem;
      margin-bottom: 1rem;
    }

    .quote {
      margin-top: 2rem;
      font-style: italic;
      font-size: 3rem;
      text-align: center;
      color: #333;
      column-span: all;
    }

    .nowrap {
      white-space: nowrap; /* 짤리지 않게 해준다 */
    }
  }
</style>
