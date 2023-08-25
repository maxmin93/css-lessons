<svelte:head>
  <title>CSS 23: How to organize CSS (BEM)</title>
</svelte:head>

<header class="header">
  <h1 class="header__title">BEM</h1>
  <nav class="header__nav">
    <button class="header__btn">🚀</button>
    <button class="header__btn header__btn--secondary">🔥</button>
    <button class="header__btn header__btn--lean header__btn--border-lg header__btn--secondary">🌮</button>
  </nav>
</header>

<style lang="postcss">
  /* || BLOCKS */
  /* aka components */

  .header {
    align-items: center; /* 세로 정렬 */
    background-color: var(--HEADER-BGCOLOR);
    color: var(--HEADER-COLOR);
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between; /* 가로 정렬 */
    padding: 1rem 1rem 0.5rem;

    h1 {
      padding-bottom: 1rem;
    }
  }

  .btn {
    width: 100px;
    height: 100px;
    border-radius: 15px;
  }

  /* || Elements */
  /* 단독으로 의미 전달이 어려운 블럭을 묶어서 의미를 보충한다 */

  /* 구조화 시키지 말 것. 심플하게 btn 만 알려주면 됨.
     ex) header__nav__btn  */
  .header__btn {
    min-width: 100px;
    min-height: 100px;
    border-radius: 15px;
  }

  /* || Modifiers */
  /* 스타일 변화가 적은 것에서 큰 순서로 정렬 */

  /* Blocks with modifiers */
  .btn--secondary {
    background-color: yellow;
  }

  .btn--lean {
    transform: skewX(-10deg);
  }

  .btn--border-lg {
    border: 5px solid black;
  }

  /* modifier 와 결합된 elements */
  .header__btn--secondary {
    background-color: yellow;
  }

  .header__btn--lean {
    transform: skewX(-10deg);
  }

  .header__btn--border-lg {
    border: 5px solid whitesmoke;
  }
</style>
