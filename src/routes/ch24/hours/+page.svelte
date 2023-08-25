<script lang="ts">
</script>

<svelte:head>
  <title>CSS 24: hours.html</title>
</svelte:head>

<article class="main__article">
  <h2>Hours</h2>
  <p>We are open 7 days a week!</p>
  <dl>
    <dt>Sunday-Thursday</dt>
    <dd>11am-9pm</dd>
    <dt>Friday-Saturday</dt>
    <dd>11am-11pm</dd>
  </dl>
</article>

<style lang="postcss">
  /* || COMMONS */

  h2 {
    font-family: var(--FF-HEADINGS);
    letter-spacing: 0.1em;
    margin-bottom: 1em;
    color: var(--HIGHLIGHT-COLOR);
  }

  p {
    line-height: 1.5;
  }

  /* || MAIN */

  .main__article {
    scroll-margin-top: 6.5rem;
    margin: var(--MARGIN);

    &:first-child {
      margin-top: 1em;
    }
    &:last-child {
      min-height: calc(100vh - 20rem);
    }

    dl {
      margin-top: 1em;

      dd {
        text-indent: 20px;
      }
    }
  }
</style>
