<svelte:head>
  <title>CSS 10: Display</title>
</svelte:head>

<main>
  <!--   <p>This is a paragraph.</p>
  <p>This is <span class="opposite">another</span> paragraph.</p>
 -->
  <nav>
    <ul>
      <li><a href={undefined}>Intro</a></li>
      <li><a href={undefined}>Portfolio</a></li>
      <li><a href={undefined}>Projects</a></li>
    </ul>
  </nav>
</main>

<style lang="postcss">
  main {
    background-color: aqua;
  }

  p {
    background-color: lightgray;
    margin-top: 1rem;
  }

  .opposite {
    display: inline-block; /* 안하면, margin 등은 효과 없음 */
    background-color: #333;
    color: whitesmoke;
    margin-top: 2rem;
  }

  ul {
    list-style-type: none;
    padding: 0.5rem;
    text-align: right;
    background-color: black;
    color: whitesmoke;
    margin: 0;
  }

  li {
    display: inline-block;
    margin-inline: 0.5rem;

    a {
      text-decoration: none;
      color: whitesmoke;
      cursor: pointer;

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
  }
</style>
