export const state = () => ({
  user: {
    id: 1,
    name: "Niga",
    secondName: "Nigger",
    img: "https://sun9-15.userapi.com/impg/e1110XwyyoTeM4dbUt2LR9eqDErVL5LoaZEoMQ/11YQkgI9-mw.jpg?size=563x782&quality=95&sign=4d04e094319a8cef739927711af9ba6b&type=album",
    background: "https://sun9-15.userapi.com/impg/e1110XwyyoTeM4dbUt2LR9eqDErVL5LoaZEoMQ/11YQkgI9-mw.jpg?size=563x782&quality=95&sign=4d04e094319a8cef739927711af9ba6b&type=album",
    role: "admin",
  }
})

export const getters = {
  getCurrentUser (state) {
    return state.user
  }
}

export const mutations = {

}

export const actions = {

}
