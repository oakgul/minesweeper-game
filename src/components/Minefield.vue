<template>
    <div class="container">
        <div :style="{width:gridPiece + 'px'}" class="mine-field">
           <button :disabled='item.show === true'  class="box mb-2" v-for="item in data" :key="item.id" 
            :style="{backgroundColor: item.show === true ? item.color : null}"  @click="check(item)">
                <img class="checkIcon" v-if="item.color === '#25A35C' && item.show === true" src="../assets/check.svg" alt="check">
                <img class="mineIcon" v-if="item.color === '#FA3A3A' && item.show === true" src="../assets/mine.svg" alt="mine">   
            </button>
       </div>

        <!-- AUDIOS -->
        <audio id="myAudio">
            <source src="../assets/lost.wav" >
        </audio>

        <audio id="coinAudio">
            <source src="../assets/coin.wav">
        </audio>

        <audio id="winAudio">
            <source src="../assets/youwin.wav">
        </audio>
        
    </div>
</template>

<script>
export default {  
    computed : {
        data() {
            return this.$store.state.data;
        },

        gridPiece() {
            return this.$store.state.gridPiece;
        },

        minePiece() {
            return this.$store.state.minePiece;
        },

        winShow() {
            return this.$store.state.winShow;
        },
    },

    methods : {
        gameOver() {
            this.$store.state.modalShow = true;
        },

        check(item) {
            let audio = document.getElementById('myAudio');
            if(item.color === '#FA3A3A') {
                this.$store.state.points.push(this.score);
                audio.play();
                this.gameOver();

                this.data.forEach(x => {
                    x.show = true;
                })
            }else{
                let coinAudio = document.getElementById('coinAudio');
                item.show = true;
                this.$store.state.score += 5;
                coinAudio.play();
                if(this.$store.state.greenBlocks === 1){
                    this.data.forEach(x => {
                    x.show = true;
                    });
                    this.$store.state.winShow = true;
                    let coinAudio = document.getElementById('winAudio');
                    winAudio.play();                    
                }else{
                    this.$store.state.greenBlocks--;
                }
            }
          },
        }
    }
</script>

<style scoped>
    .box {
        width: 61px;
        height: 61px;
        border-radius: 5px;
        background-color: #5D6980;
        box-shadow: 0px 5px 0px #DFDFDF;
        display: inline-block;
        margin-right: 5px;
        margin-bottom: 1px;
        cursor: pointer;
        position: relative;
    }

    .box:hover {
        background-color: lightcoral;
    }

    .mine-field {
        width: 330px;
        height: 330px;
    }

    .checkIcon {
        position: absolute;
        left: 10%;
        top: 25%;
    }

    .mineIcon {
        position: absolute;
        left: 21%;
        top: 13%;
    }
</style>