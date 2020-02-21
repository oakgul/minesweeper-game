import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score : 0,
    data : [],
    names : [],
    points : [],
    modalShow : false,
    gridPiece : 0,
    minePiece : 0,
    players : {
          name : [],
          point : [],
    }
    // quareCount : null,  >>  mayın tarlasındaki grid sayısı
  },
})
