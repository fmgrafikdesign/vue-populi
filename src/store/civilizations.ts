import axios from 'axios'
import localforage from 'localforage'
import { defineStore } from 'pinia'
import type ICivilization from '@/ICivilization'
import router from '@/router'

const url = import.meta.env.VITE_API_URL as string

interface State {
  civilizations: ICivilization[]
  receivedData: boolean
  settings: Record<string, unknown>
  civFilter: string
}

export const useCivilizationStore = defineStore('civilizations', {
  state: (): State => ({
    civilizations: new Array<ICivilization>(42),
    receivedData: false,
    settings: {},
    civFilter: '',
  }),
  getters: {
    getCivilizationById: (state) => (id: number) => {
      return state.civilizations.find((civ) => civ.id === id)
    },
    getCivilizationByName: (state) => (name: string) => {
      // name is undefined for a render tick or two right after data arrives,
      // since receivedData flips before router.push's navigation resolves.
      if (!name) return undefined
      return state.civilizations.find(
        (civ) => civ.name.toLowerCase() === name.toLowerCase(),
      )
    },
  },
  actions: {
    setCivilizationData(payload: ICivilization[]) {
      this.civilizations = payload
      this.receivedData = true
    },
    addToCivFilter(payload: string) {
      this.civFilter += payload
    },
    removeCharacterFromFilter() {
      this.civFilter = this.civFilter.slice(0, -1)
    },
    getCivilizationData() {
      localforage.getItem<ICivilization[]>('civilizations').then((value) => {
        if (!value) return
        this.setCivilizationData(value)
        this.navigateToCivilization()
      })
      axios.get(url).then((data) => {
        this.setCivilizationData(data.data)
        this.navigateToCivilization()
        localforage.setItem('civilizations', data.data)
      })
    },
    navigateToCivilization() {
      if (router.currentRoute.value.fullPath === '/') {
        router.push({
          path: `/civilization/${this.civilizations[0].name.toLowerCase()}`,
        })
      }
    },
  },
})
