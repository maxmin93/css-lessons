<svelte:head>
  <title>CSS 14: Flexbox</title>
</svelte:head>

<main class="container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
  <div class="box">5</div>
  <div class="box">6</div>
</main>

<style lang="postcss">
  .container {
    max-width: 800px;
    min-height: 400px;
    margin-inline: auto;
    border: 1px solid #000;

    display: flex; /* (주축: 수평) 열 방향으로 정렬 */
    gap: 1rem;

    justify-content: space-between; /* 주축 방향 정렬 */
    align-items: center; /* 교차축 방향 정렬 */
    align-content: center; /* space-evenly; */

    flex-direction: column; /* (주축) 행 방향으로 전환 */
    /* flex-direction: row; /* (주축) 열 방향 전환
    flex-wrap: wrap; /* (교차축) 행 방향으로 전환 */
    flex-flow: row wrap; /* (주축) 행 방향으로 전환 */
  }

  .box {
    /* min-width: 100px; */
    height: 100px;
    background-color: #000;
    color: #fff;
    font-size: 2rem;
    padding: 0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    /* flex-grow: 1; */
    /* flex-shrink: 1;
    flex-basis: 250px; or 40% */
    flex: 1 1 140px; /* grow, shrink, basis */

    &:nth-child(2) {
      /* flex-grow: 2; /* 2배로 넓어짐 */
      /* flex-shrink: 2; /* 2배로 줄어듦 */
      flex: 2 2 140px;
      order: -1;
    }
  }
</style>
