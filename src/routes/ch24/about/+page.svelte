<script lang="ts">
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>CSS 24: about.html</title>
</svelte:head>

<article id="about" class="main__article about">
  <h2>About <abbr title="The Little Taco Shop">LTS</abbr></h2>
  <p>
    <abbr title="The Little Taco Shop">LTS</abbr> was founded in <time datetime="2022">2022</time>. Our shop was built
    from a <strong>love of tacos</strong> 🌮🌮🌮. We hope our shop adds a unique and interesting place to our little town.
  </p>
  <aside class="about__trivia">
    <h3>Taco Trivia</h3>
    <details>
      <summary>When did tacos first appear in the United Stated?</summary>
      <p class="about__trivia-answer">
        Jeffrey M. Pilcher, taco historian and professor of history at the University of Minnesota, says the earliest
        mention of tacos in the United States are in a newspaper from <time datetime="1905">1905</time>. (Source:
        <cite
          ><a href="https://www.smithsonianmag.com/arts-culture/where-did-the-taco-come-from-81228162/" target="_blank"
            >Smithsonian Magazine</a
          ></cite
        >)
      </p>
    </details>
  </aside>
</article>

<style lang="postcss">
  /* || COMMONS */

  h2,
  h3 {
    font-family: var(--FF-HEADINGS);
    letter-spacing: 0.1em;
  }

  h2 {
    margin-bottom: 1em;
    color: var(--HIGHLIGHT-COLOR);
  }

  p {
    line-height: 1.5;
  }

  a {
    &:any-link {
      color: var(--LINK-COLOR);
    }
    &:hover,
    &:focus-visible {
      color: var(--LINK-HOVER);
    }
    &:active {
      color: var(--LINK-ACTIVE);
    }
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
  }

  /* || ABOUT */

  .about {
    p {
      margin-top: 0.5em;
    }

    &__trivia {
      margin: var(--MARGIN);

      summary {
        margin-top: 0.5em;
      }
      &-answer {
        margin-top: 1em;
      }
    }
  }
</style>
