<template>
  <div class="container">

    <div class="main-head mb-3">
      <div class="logo"><h1>MINEFILED</h1></div>
      <div class="score">Score</div>
    </div>

    <div class="inputs">
      <input type="text" class="form-control" placeholder="Your name..">
      <input type="text" class="form-control" placeholder="Your name..">
      <button class="btn btn-warning">Start</button>
    </div>

</div>
</template>

<style scoped>

  .main-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    
  }

  .logo {
    width: 525px;
    height: 108px;
    background-color: gray;
  }

  .score {
    width: 250px;
    height: 60px;
    background-color: lightgray;
  }

  .inputs {
    display: flex;
    justify-content: space-between;
  }

  .form-control {
    width: 433px;
  }

  .inputs>button {
    width: 100px;
  }

</style>