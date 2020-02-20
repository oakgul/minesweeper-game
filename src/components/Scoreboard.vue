<template>
    <div class="container">

        <div class="scoreboard float-right">
            <div class="header">Top 10 Score</div>
            <ul>
                <li style="list-style-type:none" v-for="player in names" :key="player.id">  {{ player }}</li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    computed : {
        names() {
            return this.$store.state.names;
        }
    }
}
</script>



<style scoped>

    .header {
        width: 100%;
        height: 50px;
        background-color: lightgreen;
        text-align: center;
        font-size: 30px;
    }

    .scoreboard {
        width: 432px;
        height: 330px;
        background-color: lightslategray;
        margin-top: -320px;
        border: 1px solid black;
    }
    

</style>