<script lang="ts">
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>CSS 24: hours.html</title>
</svelte:head>

<article class="main__article">
  <h2>Our Location</h2>
  <address>
    555 Taco Temptation Lane, Suite T<br />
    Kansas City, MO 55555-5555
    <br /><br />
    Phone: <a href="tel:+5555555555">555-555-5555</a>
  </address>
</article>
<hr />
<article class="main__article contact">
  <h2 class="contact__h2">Our Contact Form</h2>

  <form class="contact__form" action="https://httpbin.org/get" method="get">
    <fieldset class="contact__fieldset">
      <legend class="offscreen">Send Us A Message</legend>
      <p class="contact__p">
        <label class="contact__label" for="name">Name:</label>
        <input class="contact__input" type="text" name="name" id="name" placeholder="your name" required />
      </p>
      <p class="contact__p">
        <label class="contact__label" for="email">Email:</label>
        <input class="contact__input" type="email" name="email" id="email" placeholder="your email" required />
      </p>
      <p class="contact__p">
        <label class="contact__label" for="message">Your Message:</label>
        <br />
        <textarea
          class="contact__textarea"
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Type your message here"
        />
      </p>
    </fieldset>
    <button class="contact__button" type="submit">Send</button>
    <button class="contact__button" type="reset">Reset</button>
  </form>
</article>

<style lang="postcss">
  /* || COMMONS */

  h2 {
    font-family: var(--FF-HEADINGS);
    letter-spacing: 0.1em;
    margin-bottom: 1em;
    color: var(--HIGHLIGHT-COLOR);
  }

  p {
    line-height: 1.5;
  }

  a {
    &:any-link {
      color: var(--LINK-COLOR);
    }
    &:hover,
    &:focus-visible {
      color: var(--LINK-HOVER);
    }
    &:active {
      color: var(--LINK-ACTIVE);
    }
  }

  /* || MAIN */

  .main__article {
    scroll-margin-top: 6.5rem;
    margin: var(--MARGIN);

    &:first-child {
      margin-top: 1em;
    }
    &:last-child {
      min-height: calc(100vh - 20rem);
    }
  }

  /* || CONTACT */

  .contact {
    &__h2 {
      margin: 0;
    }

    &__fieldset {
      border: none;
    }

    &__p {
      margin: 1em 0;
    }

    &__label {
      display: block;
      font-weight: bold;
    }

    &__input,
    &__textarea {
      padding: 0.5em;
      border-radius: var(--BORDER-RADIUS);
      border-width: 2px;
      width: 100%;
    }

    &__button {
      padding: 0.5em;
      border-radius: var(--BORDER-RADIUS);
      background-color: var(--HIGHLIGHT-COLOR);
      color: var(--BUTTON-COLOR);
      font-weight: bold;
    }
  }
</style>
