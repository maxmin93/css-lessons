<svelte:head>
  <title>CSS 06: Box Model</title>
</svelte:head>

<!-- margin 때문에 상단에 여백이 생긴다 -->
<header class="container">
  <h1>CSS Box Model</h1>
</header>
<main class="container">
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laudantium exercitationem corporis quia dolores
    esse enim? Necessitatibus quisquam, magni iste beatae earum et fugiat aut delectus porro voluptate, praesentium
    totam?
  </p>
  <div class="circle" />
  <!-- margin 때문에 하단에 여백이 생긴다 -->
</main>

<style lang="postcss">
  .container {
    border: 2px dashed red;
    font-size: 1.5rem;
    margin: 1.5em 2em 2em 1.5em;
    padding: 1em;
  }

  .circle {
    margin: 3rem auto;
    background-color: gold;
    width: 100px;
    height: 100px;
    border: 2px solid black;
    border-radius: 50px;
    outline: 2px dashed red;
    outline-offset: 0.25rem;
  }

  h1 {
    /* border: 2px dashed red; */
    /* width: 50%; */
    font-size: 3rem;
    padding: 0.5em;
  }

  main {
    font-size: 2rem;
  }

  p {
    font-size: 2rem;
    /* width: 40ch; */
  }
</style>
