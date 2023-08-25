<script lang="ts">
  import { page } from '$app/stores';

  const rootPath = '/ch24';
  const thisYear = new Date().getFullYear().toString();

  interface Figure {
    imgFile: string;
    caption: string;
  }
  let figData: Figure;

  // page 가 변경될 때마다 실행
  $: {
    if ($page.url.pathname === `${rootPath}/hours`) {
      figData = {
        imgFile: 'tacos_tray_1000x667.png',
        caption: 'A Tray of Tasty Tacos',
      };
    } else if ($page.url.pathname === `${rootPath}/contact`) {
      figData = {
        imgFile: 'tacos_close_up_1000x649.png',
        caption: 'Little Taco Shop Tacos',
      };
    } else if ($page.url.pathname === `${rootPath}/about`) {
      figData = {
        imgFile: 'tacos_delicioso_1000x667.png',
        caption: 'Try these Delicious Tacos',
      };
    } else {
      figData = {
        imgFile: 'tacos_and_drink_1000x667.png',
        caption: 'Tacos and a Drink',
      };
    }
  }
</script>

<svelte:head>
  <meta name="author" content="Tonyne JejuOnl" />
  <meta name="description" content="The Little Taco Shop" />
  <link rel="icon" type="image/png" href="/favicon.ico" />
</svelte:head>

<div class="wrapper">
  <header class="header">
    <h1 class="header__h1">Little Taco Shop</h1>
    <nav class="header__nav">
      <ul class="header__ul">
        {#if $page.url.pathname !== rootPath}
          <li>
            <a href={rootPath}>Home</a>
          </li>
        {/if}
        <li>
          <a href="{rootPath}#menu">Menu</a>
        </li>
        {#if $page.url.pathname !== rootPath + '/hours'}
          <li>
            <a href="{rootPath}/hours">Hours</a>
          </li>
        {/if}
        {#if $page.url.pathname !== rootPath + '/contact'}
          <li>
            <a href="{rootPath}/contact">Contact</a>
          </li>
        {/if}
        {#if $page.url.pathname !== rootPath + '/about'}
          <li>
            <a href="{rootPath}/about">About</a>
          </li>
        {/if}
      </ul>
    </nav>
  </header>

  <section class="hero">
    {#if $page.url.pathname === rootPath}
      <h2 class="hero__h2">Bienvenidos!</h2>
    {/if}
    <figure>
      <img src="/images/{figData.imgFile}" alt="Tacos Delicioso" title="We love tacos!" width="1000" height="667" />
      <figcaption class="offscreen">{figData.caption}</figcaption>
    </figure>
  </section>

  <main class="main">
    <slot />
  </main>

  {#if $page.url.pathname !== rootPath}
    <p class="center">
      <a href={rootPath}>Back to Home</a>
    </p>
  {/if}

  <footer class="footer">
    <p>
      <span class="nowrap">Copyright &copy; <time datetime={thisYear} id="year">{thisYear}</time></span>
      <span class="nowrap">The Little Taco Shop</span>
    </p>
  </footer>
</div>

<style lang="postcss">
  /* || VARIABLES */

  :root {
    /* FONTS */
    --FF: 'Nunito', sans-serif;
    --FF-HEADINGS: 'Fugaz One', cursive;
    --FS: clamp(1rem, 2.2vh, 1.5rem);
    /* clamp(min, prefered, max)
    */

    /* COLORS */
    --BGCOLOR-FADE: rgb(252, 220, 160);
    --BGCOLOR: orange;
    --BGIMAGE: linear-gradient(to bottom, var(--BGCOLOR), var(--BGCOLOR-FADE));
    --BODY-BGCOLOR: #fff;
    --BORDER-COLOR: #333;
    --BUTTON-COLOR: #fff;
    --FONT-COLOR: #000;
    --HEADER-BGCOLOR: #000;
    --HEADER-COLOR: #fff;
    --HERO-BGCOLOR: rgba(51, 178, 51, 0.75);
    --HERO-COLOR: #fff;
    --HIGHLIGHT-COLOR: rgb(51, 178, 51);
    --LINK-ACTIVE: orange;
    --LINK-COLOR: #000;
    --LINK-HOVER: hsla(0, 0%, 0%, 0.6);
    --NAV-BGCOLOR: #fff;

    /* BORDERS */
    --BORDERS: 1px solid var(--BORDER-COLOR);
    --BORDER-RADIUS: 15px;

    /* STANDARD PADDING */
    --PADDING-TB: 0.25em;
    --PADDING-SIDE: 2.5%;

    /* STANDARD MARGIN */
    --MARGIN: clamp(1em, 2.5vh, 1.5em) 0;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --BGCOLOR-FADE: gray;
      --BGCOLOR: #000;
      --BODY-BGCOLOR: #333;
      --BORDER-COLOR: whitesmoke;
      --BUTTON-COLOR: #000;
      --FONT-COLOR: whitesmoke;
      --HEADER-COLOR: whitesmoke;
      --HERO-COLOR: #333;
      --HIGHLIGHT-COLOR: whitesmoke;
      --LINK-ACTIVE: rgb(252, 200, 103);
      --LINK-COLOR: whitesmoke;
      --LINK-HOVER: orange;
      --NAV-BGCOLOR: rgb(20, 20, 20);
    }
  }

  div.wrapper {
    background-color: var(--BODY-BGCOLOR);
    color: var(--FONT-COLOR);
    min-height: 100vh;
    max-width: 800px;
    margin: 0 auto;

    /* 좌우 그라디언트 경계선 효과 */
    border-left: var(--BORDERS);
    border-right: var(--BORDERS);
    box-shadow: 0 0 10px var(--BORDER-COLOR);

    h1,
    h2 /*,  h3 selector 가 없음
    h3 */ {
      font-family: var(--FF-HEADINGS);
      letter-spacing: 0.1em;
    }

    h2 /*,  h3 selector 가 없음
    h3 */ {
      margin-bottom: 1em;
      color: var(--HIGHLIGHT-COLOR);
    }

    p {
      line-height: 1.5;
    }

    a:any-link {
      color: var(--LINK-COLOR);
    }

    a:hover,
    a:focus-visible {
      color: var(--LINK-HOVER);
    }

    a:active {
      color: var(--LINK-ACTIVE);
    }
  }

  /* || HEADER */

  .header {
    position: sticky;
    top: 0;
    z-index: 1;

    &__h1 {
      text-align: center;
      background-color: var(--HEADER-BGCOLOR);
      color: var(--HEADER-COLOR);
      padding: var(--PADDING-TB) var(--PADDING-SIDE);
    }

    &__nav {
      background-color: var(--NAV-BGCOLOR);
      border-bottom: var(--BORDERS);
      font-weight: bold;
      box-shadow: 0 6px 5px -5px var(--BORDER-COLOR);
    }

    &__ul {
      padding: var(--PADDING-TB) var(--PADDING-SIDE);
      list-style-type: none;

      display: flex;
      flex-flow: row nowrap;
      justify-content: space-evenly;
      gap: 1rem;
    }
  }

  @media screen and (min-width: 576px) {
    .header__h1 {
      &::before {
        content: '🌮 ';
      }

      &::after {
        content: ' 🌮';
      }
    }
  }

  /* || HERO */

  .hero {
    position: relative; /* 기준 선언 */

    /* 광고 강조 문구 overlay */
    &__h2 {
      background-color: var(--HERO-BGCOLOR);
      color: var(--HERO-COLOR);
      padding: 0.25em 0.5em;
      text-shadow: 2px 2px 5px var(--BORDER-COLOR);

      position: absolute; /* 절대 위치 */
      top: -100px;
      left: 20px;
      animation: showWelcome 0.5s ease-in-out 1s forwards;
    }

    @keyframes showWelcome {
      0% {
        top: -20px;
        transform: skew(0deg, -5deg) scaleY(0);
      }
      80% {
        top: 30px;
        transform: skew(10deg, -5deg) scaleY(1.2);
      }
      100% {
        top: 20px;
        transform: skew(-10deg, -5deg) scaleY(1);
      }
    }
  }

  /* || FOOTER */

  .footer {
    position: sticky; /* 끝 위치에 고정 */
    bottom: 0;

    background-color: var(--HEADER-BGCOLOR);
    color: var(--HEADER-COLOR);
    padding: var(--PADDING-TB) var(--PADDING-SIDE);
    text-align: center;
  }

  /* || MAIN */

  .main {
    padding: var(--PADDING-TB) var(--PADDING-SIDE);

    /* 하위 페이지에 영향을 미치지 못한다. (해당 페이지에 작성해야 함)
    /* &__article {
      scroll-margin-top: 6.5rem;
      margin: var(--MARGIN);

      &:first-child {
        margin-top: 1em;
      }
      &:last-child {
        min-height: calc(100vh - 20rem);
      }
    } */
  }
</style>
