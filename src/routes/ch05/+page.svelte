<svelte:head>
  <title>CSS 05: Units</title>
</svelte:head>

<header>
  <h1>CSS Units</h1>
</header>
<main>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laudantium exercitationem corporis quia dolores
    esse enim? Necessitatibus quisquam, magni iste beatae earum et fugiat aut delectus porro voluptate, praesentium
    totam?
  </p>
</main>

<style lang="postcss">
  header {
    width: 100%;
  }

  h1 {
    border: 2px dashed red;
    width: 50%;
    font-size: 3rem;
    padding: 0.5em;
  }

  main {
    font-size: 2rem;
    width: 100%;
  }

  p {
    text-align: justify;
    font-size: 1.5rem;
    line-height: 1.5;
    /* width: 40ch; */
  }
</style>
