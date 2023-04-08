export const state = () => ({
  user: {
    id: 1,
    name: "User",
    secondName: "User",
    img: "https://sun9-15.userapi.com/impg/e1110XwyyoTeM4dbUt2LR9eqDErVL5LoaZEoMQ/11YQkgI9-mw.jpg?size=563x782&quality=95&sign=4d04e094319a8cef739927711af9ba6b&type=album",
    background: "https://sun9-15.userapi.com/impg/e1110XwyyoTeM4dbUt2LR9eqDErVL5LoaZEoMQ/11YQkgI9-mw.jpg?size=563x782&quality=95&sign=4d04e094319a8cef739927711af9ba6b&type=album",
    role: "admin",
    color: "#385F73",
    colorText: "#FFFFFF",
    bd: '11-12-2022',
    activate: true,
    banStatus: false,
  }
})

export const getters = {
  getCurrentUser (state) {
    return state.user
  }
}

export const mutations = {
  change(state, value){
    state.user.name = value.name
    state.user.secondName = value.secondName
    state.user.img = value.img
    state.user.background = value.background
    state.user.color = value.color
    state.user.colorText = value.colorText
  }
}

export const actions = {

}
