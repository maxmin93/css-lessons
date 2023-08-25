<script lang="ts">
  let count = 0;
  function handleClick() {
    count += 1;
  }

  $: console.log(`the count is ${count}`);
  $: if (count >= 10) {
    alert('count is dangerously high!');
    count = 0;
  }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click={handleClick} style="margin-top: 1rem;">
  Clicked {count}
  {count === 1 ? 'time' : 'times'}
</button>
