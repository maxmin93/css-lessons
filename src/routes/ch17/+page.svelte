<svelte:head>
  <title>CSS 17: Media Queries</title>
</svelte:head>

<header>
  <h1>Header</h1>
  <nav><h2>Nav</h2></nav>
</header>

<main>
  <h2>Main</h2>
</main>

<footer>
  <h2>Footer</h2>
</footer>

<style lang="postcss">
  header,
  nav,
  main,
  footer {
    display: grid;
    place-content: center;
    grid-template-columns: 100%;
    text-align: center;
  }

  header,
  footer {
    position: sticky;
    background-color: #1e293b;
    color: whitesmoke;
  }

  header {
    top: 0;
  }

  nav {
    background-color: white;
    color: black;
    padding: 0.5rem;
    border-bottom: 2px solid black;
  }

  main {
    flex-grow: 1;
  }
  footer {
    bottom: 0;
  }

  /* || SMALL */
  @media screen and (min-width: 576px) {
    nav {
      display: none;
    }
  }
  /* || MEDIUM */
  @media screen and (min-width: 576px) {
  }

  /* || XL */
  @media screen and (max-height: 425px) and (min-aspect-ratio: 7/4) {
    h1,
    h2 {
      font-size: 1.5rem;
    }
    nav {
      display: none;
    }
  }
</style>
