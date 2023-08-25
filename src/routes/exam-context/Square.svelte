<script>
  import { getContext } from 'svelte';

  // @ts-ignore
  export let x;
  // @ts-ignore
  export let y;
  // @ts-ignore
  export let size;
  // @ts-ignore
  export let rotate;

  getContext('canvas').addItem(draw);

  // @ts-ignore
  function draw(ctx) {
    ctx.save();

    // @ts-ignore
    ctx.translate(x, y);
    // @ts-ignore
    ctx.rotate(rotate);

    ctx.strokeStyle = 'black';
    // @ts-ignore
    ctx.strokeRect(-size / 2, -size / 2, size, size);

    ctx.restore();
  }
</script>
