<svelte:head>
  <title>CSS 13: Position</title>
</svelte:head>

<!-- <div class="outer-container">
  <div class="inner-container">
    <div class="box absolute">
      <p>Absolute</p>
    </div>
    <div class="box relative">
      <p>Relative</p>
    </div>
    <div class="box fixed">
      <p>Fixed</p>
    </div>
    <div class="box sticky">
      <p>Sticky</p>
    </div>
  </div>
</div> -->

<button class="social">🚀</button>
<section id="one">
  <header class="blue">Header One</header>
  <h2>One</h2>
</section>
<section id="two">
  <header class="red">Header Two</header>
  <h2>Two</h2>
</section>
<section id="three">
  <header class="green">Header Three</header>
  <h2>Three</h2>
</section>
<footer>
  <div>
    <a href="#one">One</a> |
    <a href="#two">Two</a> |
    <a href="#three">Three</a>
  </div>
</footer>

<style lang="postcss">
  .outer-container {
    border: 3px dashed #000;
    width: 75vw;
    height: 85vh;
    margin: 40px auto;

    position: relative;
  }

  .inner-container {
    border: 2px solid #00f;
    width: 40vw;
    height: 50vh;
    margin: 200px auto;
    /* position: relative; */
  }

  .box {
    width: 150px;
    height: 150px;
    color: #fff;
    padding: 1rem;
  }

  .static {
    background-color: gold;
    position: static;
    top: 100px;
    left: 50px; /* 안보여도 사용되어야 할 때, left: -9999px; */
    z-index: 1;
  }

  .absolute {
    background-color: #00f;
    position: absolute; /* 기준점: 가까운 position 요소 */
    top: 100px;
    left: 50px; /* 안보여도 사용되어야 할 때, left: -9999px; */
    z-index: 1;
  }

  .relative {
    background-color: #f00;
    position: relative; /* 기준점: 부모 */
    top: 100px;
    left: 100px;
  }

  .fixed {
    background-color: green;
    position: fixed; /* 기준점: viewport (스크롤에도 위치 고정) */
    top: 100px;
  }

  .sticky {
    background-color: purple;
    position: sticky; /* 기준점: 가까운 position 요소 */
    top: 100px;
  }

  /* ///////////////////////////////// */

  section {
    height: 100vh;
  }

  .blue {
    background-color: #00f;
  }
  .red {
    background-color: #f00;
  }
  .green {
    background-color: #0f0;
  }

  header,
  footer {
    color: #fff;
    text-align: center;
    height: 100px;
  }

  header {
    position: sticky;
    top: 0;
    font-size: 5rem;
  }

  footer {
    background-color: #000;
    /* position: fixed;  /* 너비가 콘텐츠 길이만큼만 설정됨 */
    position: sticky; /* 라인 전체 너비로 설정됨 */
    bottom: 0;
    font-size: 3rem;

    div {
      position: relative;
      top: 1rem;
    }
  }

  a {
    &:visited {
      color: #fff;
    }
  }

  .social {
    background-color: royalblue;
    color: #fff;
    font-size: inherit;
    padding: 1rem;
    position: fixed;
    top: 30%;
    left: 0;
    z-index: 1;
  }
</style>
