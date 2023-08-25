<svelte:head>
  <title>CSS 11: Floats</title>
</svelte:head>

<main>
  <section>
    <div class="block left">Float</div>
    <p>
      시계가 밤 10시를 넘어가자 <a data-sveltekit-replacestate href="/html/link-a.html">남기연</a>은 자세를 바로하고
      현관문 쪽에 섰다. 거의 육십 년 만에 어머니를 만나는 것이라서 그런지 같은
      <a href="/html/link-b.html">사신(四神)</a>에 속해 있던, 마교의 교주인
      <a href="/html/link-c.html">구천마신</a>을 상대했을 때보다 더 심장이 뛰고 있었다. 생사결을 겨루는 자리도 아닌데
      말이다.
    </p>
  </section>
  <p>
    달칵. 하지만 안타깝게도 그의 손은 허공을 휘젓고 말았다. 너무나 절묘한 타이밍으로 남기연이 목을 뒤로 뺐기 때문이다.
  </p>
  <p>잠시 후 잠겨 있던 문이 열리며 사십대 후반으로 보이는, 얼굴에 주름이 가득한 중년여인이 안으로 들어왔다.</p>
  <div class="block right">Float</div>
  <p>김경윤을 내버려두고 남기연에게 다가온 박대한이 어처구니없다는 표정을 지었다.</p>
  <p>
    그리고 그건 항상 몰려다니던 다른 두 명도 마찬가지였다. 한데 그 기세가 심상치 않은지 여전히 어깨동무 상태이던
    김경윤이 숨을 들이켰다.
  </p>
  <p>그들이 기억하는 남기연은 너무 조용해서 존재감이 없는, 말 그대로 평범하기 짝이 없는 녀석이었기 때문이다.</p>
  <p>휘이익! 박대한이 손을 뻗었다.</p>
</main>

<style lang="postcss">
  a {
    text-decoration: none;
    cursor: pointer;
    color: hsl(207, 44%, 49%);

    &:visited {
      color: purple;
    }

    &:hover,
    &:focus {
      color: hsl(207, 44%, 49%, 0.8);
    }
  }

  p {
    margin-top: 1.5rem;
  }

  .block {
    width: 30vw;
    height: 30vh;
    background-color: black;
    color: white;
    padding: 1rem;
  }

  .left {
    float: left;
    margin-right: 1rem;
  }

  .right {
    float: right;
    margin-left: 1rem;
  }

  .clear {
    clear: both;
  }

  section {
    background-color: bisque;
    border: 1px solid #333;
    padding: 1rem;
    /* overflow: auto; /* 이게 없으면, float 된 요소가 빠져나감 */
    display: flow-root; /* 이쪽이 더 현대적인 방법 */
  }
</style>
