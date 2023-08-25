<div class="wrapper">
  <slot />
</div>

<style lang="postcss">
  /* || VARIABLES */

  :root {
    /* COLORS */
    --HEADER-BGCOLOR: #333;
    --HEADER-COLOR: whitesmoke;
  }

  div.wrapper {
    font-size: 2.5rem;
    min-height: 100vh;

    display: flex;
    flex-flow: column nowrap;
  }
</style>
