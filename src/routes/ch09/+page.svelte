<svelte:head>
  <title>CSS 09: Menu</title>
</svelte:head>

<nav>
  <h2>CSS Menu</h2>
  <ul>
    <li><a href="/html/link-a.html">Appetizers</a></li>
    <li><a href="/html/link-a.html">Entrees</a></li>
    <li><a href="/html/link-b.html">Desserts</a></li>
    <li><a href="/html/link-b.html">Beverages</a></li>
    <li><a href="/html/link-c.html">About</a></li>
  </ul>
</nav>
<p>
  Learn more about <a href="https://www.cnn.com/travel/article/world-best-food-dishes/index.html">Amazing Foods</a>!
</p>

<style lang="postcss">
  nav {
    border: 2px solid #333;
    border-radius: 2rem;
    margin: 0 auto 1rem;
    max-width: 600px;
    font-size: 3rem;
    line-height: 7rem;
  }

  h2 {
    padding: 1rem;
    background-color: gold;
    border-radius: 2rem 2rem 0 0;
  }

  ul {
    list-style-type: none;
  }

  li {
    border-top: 1px solid #333;

    a {
      display: block;
    }

    &:last-child a {
      border-radius: 0 0 2rem 2rem;
    }

    a,
    a:visited {
      text-decoration: none;
      color: #333;
    }

    a:hover,
    a:focus {
      background: #333;
      color: whitesmoke;
      cursor: pointer;
      font-weight: bolder;
    }
  }
</style>
