<div class="wrapper">
  <slot />
</div>

<style lang="postcss">
  div.wrapper {
    min-height: 100vh;

    /* background-color: aliceblue; */
    /* background-image: url('/images/bubbles.png'), linear-gradient(to left, steelblue, white);
    background-repeat: repeat-y, no-repeat;
    background-position: right, center; */
    background-size: 20%, auto;
    background: repeat-y right center url('/images/bubbles.png'), no-repeat linear-gradient(to left, steelblue, white);
  }
</style>
