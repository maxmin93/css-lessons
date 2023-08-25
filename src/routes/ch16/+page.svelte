<svelte:head>
  <title>CSS 16: Images</title>
</svelte:head>

<div class="container">
  <section class="hero">
    <figure class="profile-pic-figure">
      <img src="/images/profile-800x800.png" alt="profile" title="My Profile Picture" width="800" height="800" />
      <figcaption class="offscreen">Jane Doe</figcaption>
    </figure>
    <h1 class="h1">
      <span class="nowrap">Hello 👏</span>
      <span class="nowrap">I'm Jane</span>
    </h1>
  </section>
</div>

<!-- <section class="example">
  <p> -->
<!-- image 는 inline 속성을 갇기 때문에 아래쪽에 작은 공백이 생긴다
    => 공백을 없애고 싶으면 display: block; 을 추가한다
    -->
<!-- <img src="/images/pat1.png" alt="pattern1" width="200" height="200" /> -->
<!-- Yeah, this is a paragraph. -->
<!-- </p>
</section> -->

<!-- <section>
  <p class="clip">Jane</p>
</section> -->

<style lang="postcss">
  /* Utility classes */
  .nowrap {
    white-space: nowrap;
  }

  .offscreen {
    position: absolute;
    left: -10000px;
  }

  /* Layout classes */
  .container {
    background-color: rgb(251, 210, 156);
    /* background-image: url('/images/scenic-2200x1331.png'); */
    background-repeat: no-repeat;
    background-position: top right;
    background-size: cover;
  }

  /* Component classes */
  .hero {
    border-bottom: 2px solid black;
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
  }

  .h1 {
    font-size: 500%;
    color: aliceblue;
    text-shadow: 2px 2px 2px black;
    /* background-color: hsla(0, 0%, 0%, 0.405);
    padding: 0.25rem;
    border-radius: 10px; */
  }

  .example {
    margin-top: 1rem;
    padding-left: 20px;
    border: 1px solid red;

    img {
      width: 25%; /* responsive */
      height: auto;
    }
  }

  .profile-pic-figure {
    width: 35%;

    img {
      width: 100%;
      height: auto;
      min-width: 100px;
      border: 5px double gray;
      /* border-radius: 50%; */
    }
  }

  .clip {
    font-weight: 800;
    font-size: 18rem;
    text-align: center;
    background-image: url('/images/scenic-2200x1331.png');
    background-size: 100%;
    text-transform: uppercase;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
</style>
