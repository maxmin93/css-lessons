<svelte:head>
  <title>CSS 22: Animations</title>
</svelte:head>

<main>
  <div class="square">🚀</div>
  <div class="square">🔥</div>
  <div class="square animate">🌮</div>
</main>

<style lang="postcss">
  main {
    flex-grow: 1; /* 상위 flex 화면에 대해 1/1 비율로 차지 */
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  main div {
    width: 150px;
    height: 150px;
    border: 1px solid #000;
    display: grid;
    place-content: center;

    &:first-child {
      background-color: dodgerblue;
      /* transform: translateX(50%); */
      /* transform: rotateX(180deg); /* 90deg: 가로로 세워져 안보인다 */
      /* transform: scaleX(120%); */
      /* transform: skewX(-10deg); */
    }
    &:nth-child(2) {
      background-color: gold;
      /* transform: translateY(-2rem); */
      /* transform: rotateY(180deg); /* 좌우가 뒤집힌 상태 */
      /* transform: scaleY(120%); */
      /* transform: skewY(10deg); */
    }
    &:last-child {
      background-color: limegreen;
      /* transform: translate(100%, -2rem); */
      /* transform: rotateZ(78deg); /* 위아래가 뒤집힌 상태 */
      /* transform: scale(50%, 50%);  /* 줄이기 shrink */
      /* transform: skew(-10deg, -10deg); */
    }

    &:hover {
      background-color: midnightblue;
      transition-property: background-color, transform;
      transition-duration: 2s, 0.3s, 4s;
      transition-delay: 0.1s;
      transition-timing-function: ease-in-out;
      /* transition: all 2s ease-in-out 0.1s; */
    }

    /* &:last-child:hover {
      transform: rotate(180deg) scale(50%, 50%);
    } */
  }

  .animate {
    /* animation-name: slide;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-delay: 0.1s;
    animation-iteration-count: 2;
    animation-direction: alternate;
    animation-fill-mode: forwards; */
    animation: 3s ease-in-out 0.9s 2 alternate forwards slide;
  }

  @keyframes slide {
    0% {
      transform: translateX(0);
    }

    33% {
      transform: translateX(300px) rotate(180deg);
    }

    66% {
      transform: translateX(-300px) rotate(-180deg);
    }

    100% {
      transform: translateX(0);
      background-color: rebeccapurple;
    }
  }
</style>
