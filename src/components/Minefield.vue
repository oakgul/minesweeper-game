<template>
    <div class="container">

        <div :style="{width:gridPiece + 'px'}" class="mine-field">
           <button :disabled='item.show === true'  class="box mb-2" v-for="item in data" :key="item.id" 
            :style="{backgroundColor: item.show === true ? item.color : null}"  @click="check(item)">
                <p>{{item.color.length}}</p>
            </button>
       </div>

        

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

    },

    methods : {

        gameOver() {
            this.$store.state.modalShow = true;
        },


        check(item) {
            if(item.color === 'red') {
                this.$store.state.points.push(this.score);
                this.gameOver();

                this.data.forEach(x => {
                    x.show = true;
                })
            }else{
                item.show = true;
                this.$store.state.score += 5;
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
    }

    .box:hover {
        background-color: lightcoral;
    }

    .mine-field {
        width: 330px;
        height: 330px;
    }

</style>