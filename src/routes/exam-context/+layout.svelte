<div class="wrapper">
  <slot />
</div>

<style lang="postcss">
  div.wrapper {
    min-height: 100vh;
    display: flex;
    flex-flow: column nowrap;
  }
</style>
