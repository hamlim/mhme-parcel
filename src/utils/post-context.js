import { createContext } from 'react'

export const { Provider, Consumer } = createContext({
  data: {},
  setData({ title, tags, date }) {
    this.data = { ...this.data, title, tags, date }
  },
  getData() {
    return this.data
  },
})
