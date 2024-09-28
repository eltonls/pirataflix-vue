

export default class LocalStorage<T> {
  getItem(key: string): T | null {
    const item = localStorage.getItem(key)

    if (item) {
      return JSON.parse(item)
    }

    return null
  }

  setItem(key: string, newValue: T) {
    localStorage.setItem(key, JSON.stringify(newValue))
  }
}
