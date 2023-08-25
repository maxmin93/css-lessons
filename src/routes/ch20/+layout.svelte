<div class="wrapper">
  <slot />
</div>

<style lang="postcss">
  /* || VARIABLES */
  :root {
    /* FONT */
    --FF: 'Nunito', sans-serif;
    --FS: 1.5rem;
    --FS-XL: 3rem;

    /* COLOR */
    --BGCOLOR: #475569;
    --ALT-BGCOLOR: #1e293b;
    --RADIAL-COLOR: whitesmoke;
    --LIGHT-COLOR: whitesmoke;
    --DARK-COLOR: #000;

    /* SQUARE */
    --SQUARE-BGCOLOR: papayawhip;
    --SQUARE-SIZE: max(150px, 20vw);

    /* GENERAL */
    --PADDING: 0.5rem;
    --SHADOWS: 0 6px 5px -5px var(--DARK-COLOR);
    --BORDERS: 2px solid var(--DARK-COLOR);
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --BGCOLOR: #000;
      --ALT-BGCOLOR: #333;
      --RADIAL-COLOR: rgb(217, 217, 217);
      --SQUARE-BGCOLOR: rgb(202, 174, 202);
    }
  }

  div.wrapper {
    min-height: 100vh;

    background-color: var(--BGCOLOR);
    background-image: radial-gradient(var(--RADIAL-COLOR), var(--BGCOLOR));
    display: flex;
    flex-direction: column;
  }
</style>
