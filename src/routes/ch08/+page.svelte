<svelte:head>
  <title>CSS 08: Lists</title>
</svelte:head>

<header>
  <h1>CSS Lists</h1>
</header>
<main>
  <article>
    <h2>Ordered List</h2>
    <ol start="5" reversed>
      <li>Step One</li>
      <li value="11">Step Two</li>
      <li>Step Three</li>
    </ol>
  </article>
  <article>
    <h2>Unordered List</h2>
    <ul>
      <li>Step One</li>
      <li>Step Two</li>
      <li>Step Three</li>
    </ul>
  </article>
</main>

<style lang="postcss">
  ul,
  ol {
    /* padding-left: 2ch; */
    list-style-position: inside;
    line-height: 1.6;
  }

  @counter-style thumbs {
    system: cyclic;
    symbols: '\1F44D';
    suffix: ' ';
  }

  @counter-style winners-list {
    system: fixed;
    symbols: url(/images/gold-medal.svg) url(/images/silver-medal.svg) url(/images/bronze-medal.svg);
    suffix: ' ';
  }

  ol {
    list-style-type: upper-roman;

    ::marker {
      color: red;
    }
  }

  ul {
    /* list-style-type: thumbs; */
    /* list-style-image: url(/images/checkmark.png); */
    list-style: square url(/images/checkmark.png) inside;

    li:nth-child(even) {
      color: red;
    }
  }
</style>
