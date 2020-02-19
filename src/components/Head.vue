<template>
  <div class="container">

    <div class="main-head mb-3">
      <div class="logo"><h1>MINEFILED</h1></div>
      <div class="score">Score : {{score}}</div>
    </div>

    <div class="inputs">
      <input type="text" class="form-control" placeholder="Your name.." v-model="nameInput">
      <input type="text" class="form-control" placeholder="Grid count..">
      <button class="btn btn-warning" @click="addPlayer">Start</button>
    </div>

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

</style>