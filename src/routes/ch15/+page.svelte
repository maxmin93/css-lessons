<svelte:head>
  <title>CSS 15: Grid</title>
</svelte:head>

<header class="header el"><h1>Header</h1></header>
<main class="container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
  <div class="box">5</div>
  <div class="box">6</div>
</main>
<aside class="sidebar el"><h2>Sidebar</h2></aside>
<footer class="footer el"><h2>Footer</h2></footer>

<style lang="postcss">
  .el {
    background-color: rebeccapurple;
    color: #fff;
    display: grid;
    place-content: center;
  }

  .header {
    grid-area: hd;
  }

  .sidebar {
    grid-area: sb;
    background-color: blue;
  }

  .footer {
    grid-area: ft;
  }

  .container {
    grid-area: mn;
    display: grid;
    /* grid-auto-flow: column; /* row */
    grid-template-columns: repeat(2, 1fr 2fr);
    grid-auto-rows: minmax(150px, auto);
    gap: 1em 1em; /* row column */
  }

  .box {
    background-color: #000;
    color: #fff;
    font-size: 2rem;
    padding: 0.5rem;

    &:first-child {
      background-color: blue;
      grid-column: 1 / 4; /* start end */
      grid-row: 1 / 3; /* start end */

      display: grid;
      /* align-content: end; justify-content: center; */
      place-content: end center;
    }

    &:nth-child(2) {
      background-color: purple;
      grid-column: 1 / 5;
      grid-row: 3 / 4;
    }
  }
</style>
