<template>
    <div class="container">
        <div class="scoreboard float-right">
            <div class="header">Top 10 Score</div>
            <ul>
                <li style="list-style-type:none; font-family: 'Baloo', cursive; color:#5D6980" 
                    class="mt-1"
                    v-for="player in names" 
                    :key="player.id">
                     {{names.indexOf(player) + 1}}.  {{ player.name }} <span class="float-right mr-5">{{player.point}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    computed : {
        names() {
            return this.$store.state.players;
        },
    },
}
</script>

<style scoped>    
    .scoreboard {
        width: 350px;
        height: 330px;
        background-color: #F7F9FA;;
        margin-top: -320px;
        box-shadow: 0px 3px 0px #E6E6E6;
        border-radius: 10px;
    }

    .header {
        width: 100%;
        height: 50px;
        background-color:#00BCE5;
        color: white;
        text-align: center;
        font-size: 24px;
        font-weight: 700;
        line-height: 50px;
        box-shadow: 0px 3px 0px #E5E5E5;
        border-radius: 10px 10px 0px 0px;
    }
</style>