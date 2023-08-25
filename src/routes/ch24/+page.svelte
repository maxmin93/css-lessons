<script lang="ts">
</script>

<svelte:head>
  <title>CSS 24: Complete Project</title>
</svelte:head>

<!--
<header class="header">
  <h1 class="header__h1">Welcome to The Little Taco Shop</h1>
  <nav class="header__nav">
    <ul class="header__ul">
      <li>
        <a href="#menu">Menu</a>
      </li>
      <li>
        <a href="{$page.url.pathname}/hours">Hours</a>
      </li>
      <li>
        <a href="{$page.url.pathname}/contact">Contact Us</a>
      </li>
      <li>
        <a href="{$page.url.pathname}/about">About</a>
      </li>
    </ul>
  </nav>
</header>

<section class="hero">
  <h2 class="hero__h2">Bienvenidos!</h2>
  <figure>
    <img
      src="/images/tacos_and_drink_1000x667.png"
      alt="Tacos and a Drink"
      title="We love tacos!"
      width="1000"
      height="667"
    />
    <figcaption class="offscreen">Tacos and a Drink</figcaption>
  </figure>
</section>
-->

<article id="menu" class="main__article menu">
  <h2 class="munu__h2">Our Menu</h2>
  <table class="menu__container">
    <caption class="offscreen">Our Tacos</caption>
    <thead>
      <tr>
        <th class="menu__header" scope="col">Tacos</th>
        <th class="menu__header" scope="col">Qty</th>
        <th class="menu__header" scope="col">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th class="menu__item menu__cr" scope="row" rowspan="3"> Crunchy </th>
        <td class="menu__item">1</td>
        <td class="menu__item">$1.50</td>
      </tr>
      <tr>
        <td class="menu__item">2</td>
        <td class="menu__item">$2.50</td>
      </tr>
      <tr>
        <td class="menu__item">3</td>
        <td class="menu__item">$3.25</td>
      </tr>
      <tr>
        <th class="menu__item menu__sf" scope="row" rowspan="3"> Soft </th>
        <td class="menu__item">1</td>
        <td class="menu__item">$2.00</td>
      </tr>
      <tr>
        <td class="menu__item">2</td>
        <td class="menu__item">$3.50</td>
      </tr>
      <tr>
        <td class="menu__item">3</td>
        <td class="menu__item">$4.50</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td class="menu__item menu__cs" colspan="3"> Chips &amp; Salsa $2 </td>
      </tr>
    </tfoot>
  </table>
</article>

<style lang="postcss">
  h2 {
    font-family: var(--FF-HEADINGS);
    letter-spacing: 0.1em;
    margin-bottom: 1em;
    color: var(--HIGHLIGHT-COLOR);
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

  /* || MENU */

  thead,
  tbody,
  tfoot,
  tr {
    display: contents;
  }

  thead {
    th {
      &:first-child {
        border-top-left-radius: var(--BORDER-RADIUS);
      }
      &:last-child {
        border-top-right-radius: var(--BORDER-RADIUS);
      }
    }
  }

  tfoot td {
    border-bottom-left-radius: var(--BORDER-RADIUS);
    border-bottom-right-radius: var(--BORDER-RADIUS);
  }

  .menu {
    &__container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-areas:
        'hd1 hd2 hd3'
        'cr cr1 cr1p'
        'cr cr2 cr2p'
        'cr cr3 cr3p'
        'sf sf1 sf1p'
        'sf sf2 sf2p'
        'sf sf3 sf3p'
        'cs cs cs';
      gap: 0.1em;
      margin-bottom: 1em;
    }

    &__cr {
      grid-area: cr;
    }
    &__sf {
      grid-area: sf;
    }
    &__cs {
      grid-area: cs;
    }

    &__cr,
    &__sf,
    &__cs,
    &__header {
      color: var(--HIGHLIGHT-COLOR);
      font-weight: bold;
      height: 100%;
      display: grid;
      place-content: center;
    }

    &__header,
    &__item {
      width: 100%;
      padding: 1em;
      border: medium ridge var(--BORDER-COLOR);
    }

    &__item {
      display: grid;
      place-content: center;
    }
  }

  @media screen and (min-width: 576px) {
    .menu__header,
    .menu__cr,
    .menu__sf,
    .menu__cs {
      font-size: 125%;
    }
  }
</style>
