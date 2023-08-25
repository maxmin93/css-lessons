<script lang="ts">
  const squaresCount = 12;
  const squares = Array<boolean>(squaresCount).fill(false);

  function squareClick(index: number) {
    squares[index] = !squares[index];
    console.log(index, squares[index]);
  }
</script>

<svelte:head>
  <title>CSS 20: Variables</title>
</svelte:head>

<header>
  <h1>Header</h1>
  <nav>
    <h2>Nav</h2>
  </nav>
</header>

<main>
  <!-- each 블럭의 고유 id(key) 는 괄호를 이용하여 지정한다 -->
  {#each squares as active, i (i)}
    <div
      tabindex={i}
      role="button"
      class="square"
      on:click={() => {
        squareClick(i);
      }}
      on:keyup={() => {
        squareClick(i);
      }}
      class:square--highlight={active}
    >
      {#if i == 0}
        <p>Hey</p>
      {:else}
        💻
      {/if}
    </div>
  {/each}
</main>

<footer>
  <h2>Footer</h2>
</footer>

<style lang="postcss">
  header,
  nav,
  footer {
    display: grid;
    place-content: center;
    grid-template-columns: 100%;
    text-align: center;
  }

  header,
  footer {
    position: sticky;
    background-color: var(--ALT-BGCOLOR);
    color: var(--LIGHT-COLOR);
  }

  header {
    top: 0;
  }

  nav {
    background-color: var(--LIGHT-COLOR);
    color: var(--DARK-COLOR);
    padding: var(--PADDING);
    border-bottom: var(--BORDERS);
    box-shadow: var(--SHADOWS);
  }

  main {
    flex-grow: 1;

    padding: 10px 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-flow: row wrap;
    gap: min(4vw, 15px);
  }

  footer {
    bottom: 0;
  }

  /* || FEATURES */
  .square--highlight {
    --SQUARE-BGCOLOR: cornflowerblue;
  }

  .square {
    background-color: var(--SQUARE-BGCOLOR);
    width: var(--SQUARE-SIZE);
    height: var(--SQUARE-SIZE);
    border: var(--BORDERS);
    border-radius: 15px;
    display: grid;
    place-content: center;
    font-size: var(--FS-XL);
    box-shadow: var(--SHADOWS);
  }
</style>
