# Dave Gray's CSS Tutorials

프론트엔드 개발을 배우기 위해 CSS 기초부터 다지려고 합니다. Dave Gray 유튜브 강좌이고, 실습 환경은 SvelteKit + PostCSS 을 사용합니다.

> 참고문서

- Dave Gray &ndash; [CSS Full Course](https://www.youtube.com/playlist?list=PL0Zuz27SZ-6Mx9fd9elt80G1bPcySmWit)
- [MDN - CSS 문서](https://developer.mozilla.org/ko/docs/Web/CSS)

## 프로젝트 생성

SvelteKit + PostCSS 설치로 대체한다.

```console
$ npm create svelte@latest css-lesson
$ cd css-lesson

$ npx svelte-add@latest postcss
$ npm install

$ npm run dev
$ npm run dev -- --open
```

#### Nested CSS 플러그인 설치 및 설정

- nested 플러그인 설치 : `npm install --save-dev postcss-nested`
- `postcss.config.cjs` 에 nested 플러그인 추가

```js
const autoprefixer = require('autoprefixer');
const postcssNested = require('postcss-nested');

const config = {
  plugins: [autoprefixer, postcssNested],
};

module.exports = config;
```

## CSS 설정

### 전역 설정 `app.postcss`

- font 설치 및 기본 패밀리 적용
  - 웹설치 폰트보다 다운로드 후 로컬설치 방식을 권장

```css
@charset "UTF-8";

/* Import fonts from web: Noto Sans KR, sans & serif */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&family=Noto+Serif+KR&display=swap');

/* Import fonts from local, ex: url(), url(), ... */
@font-face {
  font-family: 'Noto Sans KR'; /* Reference name */
  src: url('/fonts/NotoSansKR-Regular.otf'), url('/fonts/NotoSerifKR-Regular.otf');
}

/* begin Reset */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* end Reset */

html {
  scroll-behavior: smooth; /* 부드러운 스크롤 */
  font-family: var(--theme-font-family-base);
  /* font-size: 1.5rem; */
  font-size: clamp(1rem, 2.2vh, 1.5rem);
}

body {
  min-height: 100vh;

  /* variables 가 정의되어 있지 않으면 적용되지 않는다 */
  background-color: var(--BGCOLOR);
  background-image: var(--BGIMAGE);
}

.wrapper {
  /* outline 은 box 사이즈에 포함되지 않음 */
  outline: 2px solid purple;
  outline-offset: -2px;
}
```

## 작성한 문서 (블로그)

### [Frontend 공부하기 - 2일차](/posts/2023-06-29-frontend-tutorial-day2/) : Dave Gray &ndash; [CSS Full Course](https://www.youtube.com/playlist?list=PL0Zuz27SZ-6Mx9fd9elt80G1bPcySmWit) Part&#9839;1 &nbsp; &#10004;

- Ch02. CSS Selectors : tag, class, id
- Ch03. CSS Colors
- Ch04. CSS Units &amp; Sizes
- Ch05. CSS Box Model
- Ch06. CSS Text and Fonts
- Ch07. hypertext links styles: visited, hover, active and focus
- Ch08. CSS List Styles
- Ch09. CSS Mini-project
- Ch10. CSS Display Property

### [Frontend 공부하기 - 3일차](/posts/2023-06-30-frontend-tutorial-day3/) : Dave Gray &ndash; [CSS Full Course](https://www.youtube.com/playlist?list=PL0Zuz27SZ-6Mx9fd9elt80G1bPcySmWit) Part&#9839;2

- Ch11. CSS Floats and Clears
- Ch12. CSS Columns
- Ch13. CSS Position Property
- Ch14. CSS Flexbox
- Ch15. CSS Grid Intro and Basic Layout
- Ch16. CSS Background Images and Responsive Image Properties
- Ch17. CSS Media Queries &amp; Responsive Image Properties
- Ch18. CSS Responsive Card Design

### [Frontend 공부하기 - 4일차](/posts/2023-07-03-frontend-tutorial-day4/) : Dave Gray &ndash; [CSS Full Course](https://www.youtube.com/playlist?list=PL0Zuz27SZ-6Mx9fd9elt80G1bPcySmWit) Part&#9839;3

- Ch19. CSS Pseudo-Classes vs Pseudo-Elements
- Ch20. CSS Custom Variables &amp; Dark Mode
- Ch21. CSS Functions
- Ch22. CSS Animated Responsive NavBar
- Ch23. How to Organize CSS

### [Frontend 공부하기 - 5일차](/posts/2023-07-03-frontend-tutorial-day4/) : Dave Gray &ndash; [CSS Full Course](https://www.youtube.com/playlist?list=PL0Zuz27SZ-6Mx9fd9elt80G1bPcySmWit) Part&#9839;4

- [Ch24. Complete Project](https://www.youtube.com/watch?v=cMN2Odm5ieA&list=PL0Zuz27SZ-6Mx9fd9elt80G1bPcySmWit&index=25)
- [SvelteKit CSS 예제 - Scoped component styling](https://svelte.dev/repl/bb7a7e7a71b440039016e65de00a8a98?version=3.22.2)
  - 전역 적용시 `:global` 키워드 사용
- [Ch27. CSS `:has` selector is Amazing](https://www.youtube.com/watch?v=XdtZWVK3y_Q&list=PL0Zuz27SZ-6Mx9fd9elt80G1bPcySmWit&index=28)

&nbsp; <br />
&nbsp; <br />

> **끝!** All rights reserved &copy; Tonyne 2023
