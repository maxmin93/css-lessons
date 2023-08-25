<svelte:head>
  <title>CSS 22: Animated Menu</title>
</svelte:head>

<header>
  <section class="header-title-line">
    <h1>Acme Co.</h1>
    <button class="menu-button">
      <div class="menu-icon" />
    </button>
  </section>

  <nav>
    <ul>
      <li><a href="/ch22/products">Products</a></li>
      <li><a href="/html/link-a.html">Forum</a></li>
      <li><a href="/html/link-b.html">About</a></li>
      <li><a href="/html/link-c.html">Contact</a></li>
    </ul>
  </nav>
</header>

<main />

<style lang="postcss">
  header {
    background-color: var(--HEADER-BGCOLOR);
    color: var(--HEADER-COLOR);
  }

  .header-title-line {
    padding: 0.25rem 0.5rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }

  .menu-button {
    background-color: transparent;
    border: none;
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .menu-icon,
  .menu-icon::before,
  .menu-icon::after {
    background-color: var(--HEADER-COLOR);
    width: 40px;
    height: 5px;
    border-radius: 5px;
    position: absolute;
    transition: all 0.2s ease-in-out;
  }

  .menu-icon::before,
  .menu-icon::after {
    content: '';
  }

  .menu-icon::before {
    transform: translate(-20px, -12px);
  }
  .menu-icon::after {
    transform: translate(-20px, +12px);
  }

  :is(header:hover, header:focus-within) {
    .menu-icon {
      background-color: transparent;
      transform: rotate(180deg);

      &::before {
        transform: translateX(-20px) rotate(45deg);
      }
      &::after {
        transform: translateX(-20px) rotate(-45deg);
      }
    }

    nav {
      display: block;
    }
  }

  nav {
    background-color: var(--HEADER-BGCOLOR);
    display: none; /* block; */
    transform-origin: top center;
    animation: showMenu 0.5s ease-in-out forwards;

    ul {
      list-style-type: none;
      display: flex;
      flex-flow: column nowrap;
    }

    li {
      padding: 0.5rem 1rem;
      border-top: 1px solid var(--HEADER-COLOR);
    }

    a {
      display: block;
      text-align: center;
      width: 80%;
      margin: auto;

      &:any-link {
        color: var(--HEADER-COLOR);
        font-weight: bold;
        text-decoration: none;
      }

      &:hover,
      &:focus {
        transform: scale(1.2);
        transition: all 0.3s;
      }
    }
  }

  @keyframes showMenu {
    0% {
      transform: scaleY(0);
    }
    80% {
      transform: scaleY(1.2);
    }
    100% {
      transform: scaleY(1);
    }
  }
</style>
