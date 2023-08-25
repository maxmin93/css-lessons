<svelte:head>
  <title>CSS Mini-Project: Profile Cards</title>
</svelte:head>

<header>
  <h1>Our Staff</h1>
  <nav>
    <a href="#profile1">Joe</a>
    <a href="#profile2">Matt</a>
    <a href="#profile3">Jane</a>
  </nav>
</header>

<main>
  <article id="profile1" class="card">
    <figure>
      <img src="/images/profile1-500x500.png" alt="Joe Coder" width="500" height="500" />
      <figcaption>Joe Coder</figcaption>
    </figure>
    <p>I code stuff.</p>
  </article>
  <article id="profile2" class="card">
    <figure>
      <img src="/images/profile2-500x500.png" alt="Matt Designer" width="500" height="500" />
      <figcaption>Matt Designer</figcaption>
    </figure>
    <p>I design stuff.</p>
  </article>
  <article id="profile3" class="card">
    <figure>
      <img src="/images/profile3-500x500.png" alt="" width="500" height="500" />
      <figcaption>Jane <span class="nowrap">Dev Rel</span></figcaption>
    </figure>
    <p>I teach stuff.</p>
  </article>
</main>

<footer>
  <p>&copy; Acme Co.</p>
</footer>

<style lang="postcss">
  /* Component classes */

  header {
    top: 0;

    h1::after {
      content: open-quote; /* 앞에 추가 */
      color: gray;
      margin-left: 0.5em;
      display: inline-block;
    }
  }

  :is(header, footer) {
    position: sticky;
    background-color: #1e293b;
    color: whitesmoke;
    text-align: center;
  }

  nav {
    background-color: #fff;
    padding: 0.5rem;
    border-bottom: 2px solid #000;
    font-weight: bolder;
    display: flex;
    justify-content: space-evenly;

    a:any-link {
      color: #000;
      text-decoration: none;
    }

    a:active {
      color: red;
    }

    :is(a:hover, a:focus) {
      color: blue;
    }
  }

  main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem;
  }

  footer {
    bottom: 0;
  }

  /* || PROFILE CARD */
  .card {
    scroll-margin-top: 8rem;
    width: min(100%, 350px);
    background-color: #cbd5e1;
    border: 2px solid #000;
    border-radius: 15px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    figure {
      display: flex;
      flex-flow: column nowrap;
    }

    img {
      border: 5px double #333;
      border-radius: 50%;
    }

    img:not([alt]) {
      filter: grayscale(100%);
    }

    figcaption {
      font-size: 2rem;
      font-weight: bolder;
      margin: 1rem;
      text-align: center;
    }

    &:nth-child(2) {
      background-color: papayawhip;
    }
  }

  figcaption::after {
    content: open-quote;
    font-size: 3em;
    position: absolute;
    top: -0.25em;
    left: -0.5em;
  }

  p::after {
    content: close-quote;
    font-size: 3em;
    position: absolute;
    top: -0.25em;
    right: -0.5em;
  }

  /* || SMALL */
  @media screen and (min-width: 576px) {
    main {
      justify-content: center;
      flex-flow: row wrap;
      padding: 1rem;
    }
    .card {
      width: min(100%, 400px);

      &:last-child {
        order: -1; /* 첫번째로 만들기 */
      }
    }
  }

  /* || MEDIUM */
  @media screen and (min-width: 768px) {
    nav {
      display: none;
    }
    .card {
      width: min(100%, 325px);

      figure {
        flex-flow: column-reverse;
      }
      p {
        margin-top: 1rem;
      }
    }
  }

  /* || LARGE */
  @media screen and (min-width: 992px) {
    .card {
      width: min(100%, 400px);

      &:nth-child(2) {
        order: -1; /* 첫번째로 만들기 */
      }
    }
  }

  /* || XL  */
  @media screen and (min-width: 1200px) {
    .card {
      width: min(calc(100% / 3 - 1rem), 500px);
    }
  }

  /* || MOBILE DEVICE LANDSCAPE  */
  @media screen and (max-height: 425px) and (min-aspect-ratio: 7/4) {
    h1 {
      font-size: 1.5rem;
    }

    nav {
      display: none;
    }

    main {
      flex-flow: row nowrap;
      justify-content: space-evenly;
      align-items: stretch;
    }
    .card {
      width: min(calc(100% / 3 - 0.25rem), 200px);

      figcaption,
      p {
        font-size: 1.25rem;
      }
    }
  }
</style>
