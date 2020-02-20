<template>
  <div class="container">

    <div class="main-head mb-3">
      <div class="logo"><h1>MINEFILED</h1></div>
      <div class="score">Score : {{score}}</div>
    </div>

    <div class="inputs">
      <input type="text" class="form-control" placeholder="Your name.." v-model="nameInput" @keypress.enter="addPlayer">
      
      <div class="form-group">
          <label>
            <input  type="radio" value="25" v-model="gridCount">5*5
          </label>

          <label>
            <input type="radio" value="36" v-model="gridCount">6*6
          </label>

          <label>
            <input type="radio" value="49" v-model="gridCount">7*7
          </label>

          <label>
            <input type="radio" value="64" v-model="gridCount">8*8
          </label>
      </div>

      <button  class="btn btn-warning"  @click="addPlayer" :disabled="nameInput.length == 0">Start</button>
    </div>

    <!-- modal -->
    <div v-if="modalShow" class="kapsayici">
            <div class="kapsayici-header mb-3">
                <div class="text mb-2">GAME OVER</div>
                <span class="ml-3">Your Score</span><span style="color:#5D6980; font-weight:600" class="float-right mr-3">{{score}}</span>
            </div>

            <div class="kapsayici-body">
                <button  class='btn btn-warning ml-3'>Try Again</button>
                <button  class='btn btn-success mr-3 float-right' @click="addPlayer" >New Game</button> 
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
    }
  },

  methods : {
        addPlayer() {
         if(this.$store.state.data.length > 0) {
            this.$store.state.data = []
          }else{
            this.$store.state.names.push(this.nameInput);
            this.nameInput = '';

            for(let i=0; i<this.gridCount; i++){
            this.$store.state.data.push({
                color : 'green',
                show : false,
            })
          }

            for(let i=0; i<5; i++){
                let mayinIndex = Math.floor(Math.random() * this.gridCount)
                if(this.$store.state.data[mayinIndex] === 'red') {
                    mayinIndex = Math.floor(Math.random() * this.gridCount)
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

  .form-group {
    width: 250px;
    padding: 10px;
    background-color:greenyellow;
  }

  .form-group label input {
    margin-left: 15px;
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
        font-size: 24px;
        font-weight: 700;
        background-color: #00BCE5;
        text-align: center;
        color: white;
        border-top-left-radius: 10px;
      border-top-right-radius: 10px
    }

    .kapsayici-body>button{
        width: 120px;
        box-shadow: 0px 3px 0px #FFCF97;
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