<script lang="ts">
  const squaresCount = 12;
  const squares = Array<boolean>(squaresCount).fill(false);

  function squareClick(index: number) {
    squares[index] = !squares[index];
    console.log(index, squares[index]);
  }
</script>

<svelte:head>
  <title>CSS 21: Functions</title>
</svelte:head>

<header>
  <h1>Header</h1>
  <nav>
    <h2>Nav</h2>
  </nav>
</header>

<div class="document">
  <section>
    <h2>My Heading</h2>
    <p class="content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quo aperiam porro, odio mollitia suscipit eius
      similique corrupti! Facere nihil cum recusandae officia autem tenetur suscipit exercitationem atque tempora
      molestiae.
    </p>
    <br />
    <a href="https://www.google.com/">Google</a>
  </section>
  <aside>
    <h2>Aside</h2>
    <p class="content">
      <span class="tooltip" data-tooltip="This is Latin">Lorem</span> ipsum dolor sit amet consectetur adipisicing elit.
      Modi quo aperiam porro, odio mollitia suscipit eius similique corrupti! Facere nihil cum recusandae officia autem tenetur
      suscipit exercitationem atque tempora molestiae.
    </p>
  </aside>
</div>
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
    border-bottom: var(--BORDERS);
    box-shadow: var(--SHADOWS);
  }

  .document {
    flex-grow: 1;
    padding: var(--PADDING);
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    background-color: white;

    section {
      flex-grow: 1;
      padding: var(--PADDING);
    }

    aside {
      background-color: hsla(0, 0%, 20%, 0.8);
      color: var(--LIGHT-COLOR);
      font-size: var(--FS-SM);
      font-style: italic;
      padding: var(--PADDING);
    }
  }

  .content {
    margin-top: 20px;
  }

  .tooltip {
    border-bottom: 1px dashed orange;
    position: relative;

    &:hover::before {
      content: attr(data-tooltip);
      position: absolute;
      top: -20px;
      white-space: nowrap;
      background-color: var(--DARK-COLOR);
      padding: var(--PADDING);
      border-radius: 15px;
    }
  }

  main {
    flex-grow: 1;
    padding: var(--PADDING);
    display: grid;
    grid-template-columns: repeat(4, minmax(100px, 300px));
    gap: min(2vw, 20px);
    /* display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start; */
  }

  footer {
    bottom: 0;
  }

  a:any-link {
    color: firebrick;
  }

  a:hover,
  a:focus {
    filter: brightness(150%);
  }

  /* || FEATURES */
  .square--highlight {
    --SQUARE-BGCOLOR: cornflowerblue;
  }

  .square {
    background-color: var(--SQUARE-BGCOLOR);
    border: var(--BORDERS);
    border-radius: 15px;
    display: grid;
    place-content: center;
    font-size: var(--FS-XL);
    box-shadow: var(--SHADOWS);
  }

  @media screen and (min-width: 576px) {
    .document {
      flex-flow: row nowrap;
      justify-content: space-between;

      section {
        width: calc(70% - 5px);
      }

      aside {
        width: calc(30% - 5px);
      }
    }
  }
</style>
