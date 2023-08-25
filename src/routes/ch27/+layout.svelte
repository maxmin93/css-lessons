<div class="wrapper">
  <slot />
</div>

<style lang="postcss">
  :root {
    --BGCOLOR: lightgray;
    --COLOR: #000;
  }

  div {
    min-height: 100vh;
    display: flex;
    flex-flow: column nowrap;

    background-color: lightslategray; /* var(--BGCOLOR); */
  }
</style>
