<script lang="ts">
  import { page } from '$app/stores';

  const emojis = {
    420: '🫠',
    500: '💥',
  };

  $: emoji = emojis[$page.status as keyof typeof emojis] ?? emojis[500];
</script>

<h1>{$page.status} {$page.error?.message}</h1>
<span style="font-size: 10em">
  {emoji}
</span>
