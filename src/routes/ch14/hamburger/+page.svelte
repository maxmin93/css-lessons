<header>
  <label for="checkbox">
    <span />
    <span />
    <span />
  </label>
  <input type="checkbox" id="checkbox" />
  <h1>Website</h1>
</header>
<nav>
  <ul>
    <li><a href="/ch14/hamburger">Home</a></li>
    <li><a href="/html/link-a.html">About Us</a></li>
    <li><a href="/html/link-b.html">Products</a></li>
    <li><a href="/html/link-c.html">Contact Us</a></li>
  </ul>
</nav>

<style lang="postcss">
  header {
    padding: 0px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    background-color: rgba(233, 30, 98, 1);
    color: white;

    label {
      display: flex;
      width: 35px;
      height: 25px;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;

      span {
        width: 100%;
        height: 5px;
        background-color: white;
        transition: transform 0.2s ease-in-out;
      }
    }

    input {
      display: none;
    }

    &:has(input:checked) label span {
      &:first-child {
        transform: rotateZ(37deg);
      }
      &:nth-child(2) {
        transform: scaleY(0);
      }
      &:last-child {
        transform: rotate(-37deg);
      }
    }

    label span {
      &:first-child {
        transform-origin: 0% 0%; /* top left; */
      }
      &:last-child {
        transform-origin: 0% 100%; /* bottom left; */
      }
    }
  }

  nav {
    width: 30vw;
    height: 80vh;
    background-color: rgba(233, 30, 98, 0.8);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;

    ul {
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      list-style: none;
      gap: 20px;
      padding: 20px 0px 0px 20px;
      color: white;
      font-size: 2rem;

      a {
        color: white;
        text-decoration: none;

        &:hover,
        &:focus {
          font-weight: bold;
        }
      }
    }
  }

  header:has(input:checked) ~ nav {
    transform: translateX(0%);
  }
</style>
