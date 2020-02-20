<template>
  <div class="container">

    <div class="main-head mb-3">
      <div class="logo"><h1>MINEFILED</h1></div>
      <div class="score">Score : {{score}}</div>
    </div>

    <div class="inputs">
      <input type="text" class="form-control" placeholder="Your name.." v-model="nameInput" @keypress.enter="addPlayer">
      <input type="text" class="form-control" placeholder="Grid count..">
      <button  class="btn btn-warning"  @click="addPlayer" :disabled="nameInput.length == 0">Start</button>
    </div>

    <!-- modal -->
    <div v-if="modalShow" class="kapsayici">
            <div class="kapsayici-header">
                <div class="text">GAME OVER</div>
                <p>Your Score : {{score}}</p>
            </div>

            <div class="kapsayici-body">
                <button  class='btn btn-warning'>Try Again</button>
                <button  @click="addPlayer" class='btn btn-success'>New Game</button> 
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
    }
  },

  methods : {
        addPlayer() {
         if(this.$store.state.data.length > 0) {
            this.$store.state.data = []
          }else{
            this.$store.state.names.push(this.nameInput);
            this.nameInput = '';

            for(let i=0; i<25; i++){
            this.$store.state.data.push({
                color : 'green',
                show : false,
            })
          }

            for(let i=0; i<5; i++){
                let mayinIndex = Math.floor(Math.random() * 25)
                if(this.$store.state.data[mayinIndex] === 'red') {
                    mayinIndex = Math.floor(Math.random() * 25)
                    this.$store.state.data[mayinIndex].color = 'red'
                }else {
                    this.$store.state.data[mayinIndex].color = 'red'
                }
            }
            
            }
            this.$store.state.modalShow = false;
            this.$store.state.score = 0;

            
        }
    },

    computed : {
      score() {
        return this.$store.state.score;
      },

      modalShow() {
        return this.$store.state.modalShow;
      }
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
    background-color: gray;
    padding-top: 15px;
  }

  .score {
    width: 250px;
    height: 60px;
    background-color: lightgray;
    border-radius: 10px;
    padding-top: 15px;
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

  .kapsayici {
        position: fixed;
        top: 40%;
        left: 40%;
        width: 300px;
        height: 150px;
        background-color:whitesmoke;
        border: 1px solid black;
        z-index: 1;
    }

    .text {
        font-size: 24px;
        background-color: rgb(194, 138, 138);
        text-align: center;
    }

    .kapsayici-body {
        position: relative;
        left: 40px;
        top: 7px;
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