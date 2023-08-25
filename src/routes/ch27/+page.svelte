<svelte:head>
  <title>CSS 27: has selector</title>
</svelte:head>

<section class="one grid">
  <article>
    <h2>My First Post</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Aliquid perferendis nihil consequatur eius atque officiis maxime esse.</p>
  </article>
  <article>
    <h2>My 2nd Post</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>
      Aliquid perferendis nihil consequatur eius atque officiis <span class="bold">maxime</span> esse.
    </p>
  </article>
  <article>
    <h2>My 3rd Post</h2>
    <p>
      <span class="italic">Lorem ipsum</span> dolor sit amet consectetur adipisicing elit.
    </p>
    <p>Aliquid perferendis nihil consequatur eius atque officiis maxime esse.</p>
    <button class="button">Buy Now</button>
  </article>
</section>

<section class="two">
  <nav>
    <ul class="nav__menu">
      <li class="nav__item">
        Locations
        <ul class="nav__submenu">
          <li class="nav__item">Duluth</li>
          <li class="nav__item">Portland</li>
          <li class="nav__item">Austin</li>
        </ul>
      </li>
      <li class="nav__item">
        Employees
        <ul class="nav__submenu">
          <li class="nav__item">Valerie</li>
          <li class="nav__item">John</li>
          <li class="nav__item">Macon</li>
        </ul>
      </li>
      <li class="nav__item">About</li>
    </ul>
  </nav>
</section>

<section class="three">
  <div>
    <label for="chkDarkMode">Toggle Dark Mode:</label>
    <input id="chkDarkMode" type="checkbox" class="lightswitch" />
  </div>
  <div>
    <label for="chkBubbles">Toggle Bubbles:</label>
    <input id="chkBubbles" type="checkbox" class="bubbleswitch" />
  </div>
  <div class="awesome">
    <label for="chkAgree">:has() is Awesome!<br />Agree? </label>
    <input id="chkAgree" type="checkbox" class="awesome__terms" />
  </div>
</section>

<section class="four">
  <div>
    <label for="name">Name:</label>
    <br />
    <input class="name" type="text" name="name" id="name" required pattern="^[A-Z][A-z]&lbrace;2,&rbrace;" />
  </div>
</section>

<style lang="postcss">
  section {
    min-height: 100vh;
    padding: 0.5rem;
  }

  button,
  input {
    font: inherit;
    border-radius: 10px;
  }

  button {
    padding: 1em;
  }

  .bold {
    font-weight: bold;
  }

  .italic {
    font-style: italic;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 0.5rem;
  }

  article {
    border: 1px solid #000;
    border-radius: 10px;
    padding: 1rem;
    background-color: wheat;
  }

  article p {
    margin-bottom: 1rem;
  }

  /* Example 1 */
  /* Previously we could only select forwards... */

  /* 첫번째 article은 선택되지 않음 */
  /* article + article {
    background-color: aliceblue;
  } */

  /* 첫번째 article도 선택됨. 단, 마지막 article 은 선택되지 않음 */
  /* article:has(+ article) {
    background-color: coral;
  } */

  /* Example 2 */
  /* We can do more than just select the parent */

  /* 부모 선택자의 조건을 정의 - span 이 있는 article */
  article:has(span) .bold {
    background-color: rgba(255, 255, 0, 0.61);
  }

  article:has(span) .italic {
    text-decoration: underline;
  }

  /* Example 3 */
  /* not has (aka "does not have") */

  article:not(:has(span)) {
    background-color: lightgray;
  }

  /* Example 4 */
  /* OR example */

  article:has(input, .button) {
    background-color: rebeccapurple;
  }

  /* Example 5 */
  /* AND example
    - :has(.button) 이 :has(button) 보다 우선순위가 높음
      => :has(button) 으로 하면 적용이 안됨 (덧씌워져 효과 없음)
  */

  article:has(p):has(.button) {
    background-color: lightsalmon;
  }

  /* Example 6 */
  /* more complex example - specific and looks back
  */

  article:has(p):has(.button) p:has(+ .button) {
    margin-bottom: 2rem;
  }

  /* =========================== */

  .two {
    background-color: var(--BGCOLOR);
    color: var(--COLOR);
    font-size: 1.5rem;
  }

  .nav__menu {
    max-width: 800px;
    margin: 0 auto;
    list-style-type: none;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 10px;
  }

  .nav__menu > .nav__item:first-child {
    border-radius: 10px 0 0 10px;
  }

  .nav__menu > .nav__item:last-child {
    border-radius: 0 10px 10px 0;
  }

  .nav__item {
    padding: 0.5em 1em;
    background-color: rebeccapurple;
    color: #fff;
    flex-grow: 1;
    display: grid;
    place-content: center;
    position: relative;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  .nav__submenu {
    display: none;
    width: 100%;
    position: absolute;
    top: 100%;
  }

  .nav__item:hover {
    background-color: rgb(123, 63, 182);
  }

  .nav__item:hover .nav__submenu {
    display: block;
  }

  .nav__submenu > .nav__item {
    border-top: 1px solid #fff;
  }

  /* Practical Example */
  /* Create fewer modifier classes */

  /* submenu 있는 item 만 아이콘 추가 */
  .nav__item:has(.nav__submenu)::after {
    font-family: 'Font Awesome 5 Free';
    font-weight: 400;
    content: '\f150';
    margin-left: 1rem;
  }

  /* =========================== */

  .three,
  .four {
    background-color: var(--BGCOLOR);
    color: var(--COLOR);
    display: grid;
    place-content: center;
    font-size: 2rem;
    position: relative;
  }

  input[type='checkbox'] {
    width: 2rem;
    height: 2rem;
  }

  .awesome {
    display: block;
    width: 350px;
    height: 150px;
    border: 5px double #000;
    border-radius: 10px;
    padding: 1rem;
    background-color: rgb(255, 255, 98);
    position: absolute;
    top: calc(50% - 75px);
    left: calc(50% - 175px);
  }

  /* Practical Example(s) - eliminate some JS! */

  /* Modal & agree to terms */

  /* 모달 다이얼로그 박스 지우기 */
  .awesome:has(.awesome__terms:checked) {
    display: none;
  }

  /* 다크 모드로 변경 */
  .three:has(.lightswitch:checked) {
    background-color: var(--COLOR);
    color: var(--BGCOLOR);
  }

  /* 그라디언트 및 버블 이미지 배경 적용 */
  .three:has(.bubbleswitch:checked) {
    background: repeat-y right center url('/images/bubbles.png'), no-repeat linear-gradient(to left, steelblue, #fff);
    background-size: 20%, auto;
  }

  /* label:has(+ .name) : label 뒤에 br 이 있어 선택 안된다 */
  /* label:has(~ .name) : 같은 부모 아래 후행하기만 하면 선택된다 */

  /* 요구되는 패턴에 적합하면 체크 기호 출력, ex) 'Abc' */
  label:has(~ .name:valid)::after {
    content: '✔';
    color: limegreen;
    margin-left: 1rem;
    font-size: 3rem;
  }
  /* 요구되는 패턴에 부적합하면 X 기호 출력, ex) 'Abc' */
  label:has(~ .name:invalid)::after {
    content: '❌';
    color: red;
    margin-left: 1rem;
    font-size: 2rem;
  }

  /* =========================== */

  /* input validation */
</style>
