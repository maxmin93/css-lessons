<div class="wrapper">
  <slot />
</div>

<style lang="postcss">
  div.wrapper {
    min-height: 100vh;

    background-color: #475569;
    background-image: radial-gradient(circle, whitesmoke, #475569);
    display: flex;
    flex-direction: column;
  }

  /* || SMALL */
  @media screen and (min-width: 576px) {
    div {
      background-color: lightgreen;
      background-image: radial-gradient(circle, whitesmoke, lightgreen);
    }
  }

  /* || MEDIUM */
  @media screen and (min-width: 768px) {
    div {
      background-color: gold;
      background-image: radial-gradient(circle, whitesmoke, gold);
    }
  }

  /* || LARGE */
  @media screen and (min-width: 992px) {
    div {
      background-color: firebrick;
      background-image: radial-gradient(circle, whitesmoke, firebrick);
    }
  }

  /* || XL */
  @media screen and (min-width: 1200px) {
    div {
      background-color: rebeccapurple;
      background-image: radial-gradient(circle, whitesmoke, rebeccapurple);
    }
  }

  /* || mobile landscape */
  @media screen and (max-height: 425px) and (min-aspect-ratio: 7/4) {
    div {
      background-color: dodgerblue;
      background-image: radial-gradient(circle, whitesmoke, dodgerblue);
    }
  }
</style>
