class Store_api {
  showErrors (store:any, error:any) {
    if (!error) return
    this.commit(store, error, 'error')
  }

  showSuccess (store:any, success:any) {
    if (!success) return
    this.commit(store, success, 'success')
  }

  commit (store:any, text:any, type: string) {
    const id = Math.random()
    const model = {
      id,
      text: text,
      color: type,
    }
    store.commit("addAlert", model)
    return
  }
}
export default new Store_api ()
