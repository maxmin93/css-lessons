<div class="wrapper">
  <slot />
</div>

<style lang="postcss">
  div.wrapper {
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-auto-rows: 50px auto 50px;
    grid-template-areas:
      'hd hd hd hd hd hd hd hd hd'
      'mn mn mn mn mn mn mn sb sb'
      'ft ft ft ft ft ft ft ft ft';
    column-gap: 0.5rem;
  }
</style>
