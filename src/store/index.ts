import Vue from 'vue'
import Vuex from 'vuex'
import ICivilization from '@/ICivilization'
import axios from 'axios'
import router from '@/router'
const url = 'https://secure-everglades-13540.herokuapp.com/'

Vue.use(Vuex)

interface State {
  civilizations: ICivilization[];
  receivedData: boolean;
  settings: {};
  civFilter: string;
}

const state: State = {
  civilizations: new Array<ICivilization>(42),
  receivedData: false,
  settings: {},
  civFilter: ''
}

export default new Vuex.Store({
  state,
  getters: {
    getCivilizationById: (state) => (id: number) => {
      return state.civilizations.find(civ => civ.id === id)
    },
    getCivilizationByName: (state) => (name: string) => {
      return state.civilizations.find(civ => civ.name === name)
    }
  },
  mutations: {
    setCivilizationData (state, payload: ICivilization[]) {
      state.civilizations = payload
      state.receivedData = true
    },
    addToCivFilter (state, payload: string) {
      state.civFilter += payload
    },
    removeCharacterFromFilter (state) {
      state.civFilter = state.civFilter.slice(0, -1)
    }
  },
  actions: {
    getCivilizationData ({ commit, dispatch }) {
      axios.get(url)
        .then(data => {
          commit('setCivilizationData', data.data)
          dispatch('navigateToCivilization')
        })
    },
    navigateToCivilization ({ state }) {
      if (router.currentRoute.fullPath === '/') {
        router.push({ path: '/civilization/' + state.civilizations[0].name })
      }
    }
  },
  modules: {}
})
