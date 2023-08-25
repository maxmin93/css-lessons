<div class="title">Table</div>
<div class="container container-center">
  <div>center me</div>
</div>

<style lang="postcss">
  .title {
    padding: 8px;
    background-color: #5b2e48;
    width: 600px;
    margin: 40px 20px 0px 20px;
  }

  .container {
    width: 600px;
    height: 600px;
    border: 2px solid #5b2e48;
    margin: 0px 20px 20px 20px;
    color: #5b2e48;
  }

  /* 방법5: flex|grid & margin 이용한 방법 */
  .container-center {
    /* display: flex; */
    display: grid;
  }

  .container-center div {
    margin: auto;
  }
</style>
