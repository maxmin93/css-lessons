<div class="wrapper">
  <header>
    <section class="header-title-line">
      <h1>Acme Co.</h1>
      <button class="menu-button" title="Open Nav Menu">
        <div class="menu-icon" />
      </button>
    </section>

    <button class="closeMenuBtn" title="Close Nav Menu" tabindex="-1" />

    <nav>
      <ul>
        <li><a href="/ch22">Home</a></li>
        <li><a href="/ch22/products">Products</a></li>
        <li><a href="/html/link-a.html">Forum</a></li>
        <li><a href="/html/link-b.html">About</a></li>
        <li><a href="/html/link-c.html">Contact</a></li>
      </ul>
    </nav>
  </header>

  <slot />
</div>

<style lang="postcss">
  :root {
    --HEADER-BGCOLOR: #333;
    --HEADER-COLOR: whitesmoke;
  }

  div.wrapper {
    min-height: 100vh;

    display: flex;
    flex-flow: column nowrap;
  }

  header {
    background-color: var(--HEADER-BGCOLOR);
    color: var(--HEADER-COLOR);

    position: sticky; /* 시작 위치에 고정 */
    top: 0; /* 상단에 고정 */
    z-index: 1;
  }

  .header-title-line {
    padding: 0.25rem 0.5rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    &:focus-within {
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
    }
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

  nav {
    background-color: var(--HEADER-BGCOLOR);
    display: none; /* visibility: hidden; */

    /* pull-down 메뉴 고정하기: position, top, left */
    position: relative; /* 상대좌표 기준 */

    ul {
      list-style-type: none;
      display: flex;
      flex-flow: column nowrap;

      position: absolute; /* 상대좌표를 기준으로 절대좌표 시작 */
      left: 0;
      top: 0;
      width: 100%;
    }

    li {
      background-color: var(--HEADER-BGCOLOR);
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

  header:focus-within nav {
    display: block; /* visibility: visible; */
    transform-origin: top center;
    animation: showMenu 0.5s ease-in-out forwards;
  }

  /* 열기 버튼을 누른 후에는 닫기 버튼이 그 자리를 차지한다 */
  header:focus-within .closeMenuBtn {
    display: block;
  }

  /* 닫기 버튼을 누른 후에는 열기 버튼을 위해 자리를 피해준다 */
  header:focus-within .closeMenuBtn:focus {
    transform: translateX(-50px);
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

  .closeMenuBtn {
    display: none;
    background-color: transparent;
    outline: none;
    border: 1px solid red;
    position: absolute;
    top: 0.25rem;
    right: 0.5rem;
    width: 48px;
    height: 48px;
  }

  .closeMenuBtn:focus + nav {
    animation: hideMenu 0.5s ease-in-out forwards;
  }

  @keyframes hideMenu {
    0% {
      transform: scaleY(1);
    }
    20% {
      transform: scaleY(1.2);
    }
    100% {
      transform: scaleY(0);
    }
  }
</style>
