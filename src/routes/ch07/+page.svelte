<script lang="ts">
  let links = ['/html/link-a.html', '/html/link-b.html', '/html/link-c.html'];
  let views = 0;

  $: {
    console.log('ch06', views);
    views += 1;
  }
</script>

<svelte:head>
  <title>CSS 07: Links</title>
</svelte:head>

<header>
  <h1>Chapter 1. 돌아오다</h1>
</header>
<main>
  <p>
    시계가 밤 10시를 넘어가자 <a data-sveltekit-replacestate href="/html/link-a.html">남기연</a>은 자세를 바로하고
    현관문 쪽에 섰다. 거의 육십 년 만에 어머니를 만나는 것이라서 그런지 같은
    <a href="/html/link-b.html">사신(四神)</a>에 속해 있던, 마교의 교주인
    <a href="/html/link-c.html">구천마신</a>을 상대했을 때보다 더 심장이 뛰고 있었다. 생사결을 겨루는 자리도 아닌데
    말이다.
  </p>
  <p>달칵.</p>
  <p>잠시 후 잠겨 있던 문이 열리며 사십대 후반으로 보이는, 얼굴에 주름이 가득한 중년여인이 안으로 들어왔다.</p>

  <form>
    <label for="name">Name:</label>
    <input id="name" type="text" placeholder="Your Name" />
    <button>Submit</button>
  </form>
</main>

<style lang="postcss">
  input,
  button {
    font-size: inherit;
  }

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
    margin: 1.5rem 0;
  }
</style>
