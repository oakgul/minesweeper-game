<template>
  <div class="container">
    <div class="main-head mb-3">
      <div class="logo">
        <span class="mine-text">MINE</span>
        <img src="../assets/mine.svg" alt="mine">
        <span class="sweeper-text">SWEEPER</span>
      </div>
      <div class="score">
        <span class="ml-4">Score</span>
        <span class="score-text mr-4">{{score}}</span>
      </div>
    </div>

    <div class="inputs">
      <input type="text" class="form-control" placeholder="Your name.." v-model="nameInput" @keypress.enter="addPlayer" :disabled="isGameStart">

      {{gridCount}}
        <!-- SET GRID ITEMS -->
      <div class="btn-group btn-group-toggle" >
        <label  class="btn btn btn-outline-dark" >
          <input  type="radio" name="options" value="25" v-model="gridCount" id="option1" checked> 5*5
        </label>
        <label  class="btn btn btn-outline-dark">
          <input type="radio" name="options" value="36" v-model="gridCount" id="option2"> 6*6
        </label>
        <label  class="btn btn btn-outline-dark">
          <input type="radio" name="options" value="49" v-model="gridCount" id="option3"> 7*7
        </label>
      </div>
      
      <button style="color:white; height:38px; border-bottom-left-radius:0" class="btn btn-warning" @click="addPlayer" :disabled="isGameStart">Start</button>
    </div>

    <!-- modal -->
    <div v-if="modalShow" class="kapsayici">
      <div class="kapsayici-header mb-3">
        <div class="text mb-2">GAME OVER</div>
        <span class="ml-3">Your Score</span><span style="color:#5D6980; font-weight:600" class="float-right mr-3">{{score}}</span>
      </div>

      <div class="kapsayici-body">
        <button  class='btn btn-warning ml-3' @click="tryAgain">Try Again</button>
        <button  class='btn btn-success mr-3 button-newgame float-right' @click="newGame">New Game</button> 
      </div>
    </div>

    <div v-if="modalShow" id="perde"></div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      nameInput : '',
      gridCount : 25,
      mineCount : 5,
      isGameStart : false,
    }
  },

  methods : {

    addPlayer() {
      this.isGameStart = !this.isGameStart;
      this.gridPiece();
      if(this.$store.state.data.length > 0) {
        this.$store.state.data = [];
      }else{
        this.setMineItems();
      }
      this.$store.state.modalShow = false;
      this.$store.state.score = 0;
    },

    gridPiece() {
      if(this.gridCount == 25){
        this.$store.state.gridPiece = 330;
        this.$store.state.minePiece = 20;
      }else if(this.gridCount == 36) {
        this.$store.state.gridPiece = 396;
        this.mineCount = 6;
        this.$store.state.minePiece = 30;
      }else{
        this.$store.state.gridPiece = 500;
        this.mineCount = 7;
        this.$store.state.minePiece = 42;
      }
    },

    tryAgain() {
      this.isGameStart = true;
      this.gridPiece();
      this.$store.state.data = [];
      this.setMineItems();   
      this.$store.state.modalShow = false;
      this.$store.state.score = 0;    
    },

    newGame() {
      this.$store.state.names.push(this.nameInput);
      this.nameInput = '';
      this.addPlayer();
    },

    setMineItems() {
      for(let i=0; i<this.gridCount; i++){
          this.$store.state.data.push({
            color : 'green',
            show : false,
          })
      }
      for(let i=0; i<this.mineCount; i++){
          let mayinIndex = Math.floor(Math.random() * this.gridCount)
          if(this.$store.state.data[mayinIndex] === 'red') {
            mayinIndex = Math.floor(Math.random() * this.gridCount)
            this.$store.state.data[mayinIndex].color = 'red';
          }else{
            this.$store.state.data[mayinIndex].color = 'red'
          }
      }
    },
  },

  computed : {

    score() {
      return this.$store.state.score;
    },

    modalShow() {
      return this.$store.state.modalShow;
    },
  }
}
</script>

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
    font-family: 'Baloo', cursive;
    font-size: 66px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .mine-text {
    color: #FF8A00;
  }

  .sweeper-text {
    color: #00BCE5;;
  }

  .score {
    width: 250px;
    height: 60px;
    background-color: #F7F9FA;
    box-shadow: 0px 3px 0px #E6E6E6;
    border-radius: 10px;
    color: #91949F;
    font-size: 24px;
    line-height: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .score-text {
    font-weight: 800;
    font-size: 24px;
    line-height: 32px;
    color: #5D6980;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .form-group {
    background: #F7F9FA;
    box-shadow: 0px 3px 0px #E6E6E6;
    border-radius: 10px;
  }

  .form-group input:hover {
    cursor: pointer;
  }

  .form-group label input {
    margin-left: 20px;
  }

  .kapsayici {
    position: fixed;
    top: 40%;
    left: 40%;
    width: 300px;
    height: 150px;
    background-color:#F7F9FA;
    border-radius: 10px;
    z-index: 1;
    box-shadow: 0px 3px 0px #E6E6E6;
    line-height: 33px;
  }

  .kapsayici-header span {
    font-size: 24px;
    color: #91949F;
  }

  .text {
    font-size: 20px;
    font-weight: 700;
    background-color: #00BCE5;
    text-align: center;
    color: white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    box-shadow: 0px 3px 0px #E5E5E5;
  }

  .kapsayici-body>button{
    width: 120px;
    box-shadow: 0px 3px 0px #FFCF97;
    color: white;
  }

  .kapsayici-body .button-newgame {
    box-shadow: 0px 3px 0px #AEE3C5;
  }

  #perde {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color:rgba(0, 0, 0, .5);
  }
</style>