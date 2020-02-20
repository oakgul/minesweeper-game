<template>
    <div class="container">

        <div class="mine-field">
           <button :disabled='item.show === true'  class="box" v-for="item in data" :key="item.id" 
            :style="{backgroundColor: item.show === true ? item.color : null}"  @click="check(item)">
            </button>
       </div>

    

    </div>
</template>



<script>
export default {

    data() {
        return {
            
        }
    },

    computed : {
        data() {
            return this.$store.state.data;
        }
    },

    methods : {
        check(item) {
            if(item.color === 'red') {
                this.$store.state.points.push(this.score);
                this.gameOver();

                this.data.forEach(x => {
                    x.show = true;
                })
            }else {
                item.show = true;
                this.$store.state.score += 5;
            }
          },

          gameOver() {
            this.$store.state.modalShow = true;
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

        /* display: flex;
        flex-wrap: wrap; */
    }

    
</style>