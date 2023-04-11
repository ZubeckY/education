export const state = () => ({
  alerts: [],
  user: {
    id: 1,
    name: "User",
    secondName: "User",
    bd: '2022-11-12',
    phone: '',
    email: '',
    password: '',
    img: "https://sun9-15.userapi.com/impg/e1110XwyyoTeM4dbUt2LR9eqDErVL5LoaZEoMQ/11YQkgI9-mw.jpg?size=563x782&quality=95&sign=4d04e094319a8cef739927711af9ba6b&type=album",
    background: "https://sun9-15.userapi.com/impg/e1110XwyyoTeM4dbUt2LR9eqDErVL5LoaZEoMQ/11YQkgI9-mw.jpg?size=563x782&quality=95&sign=4d04e094319a8cef739927711af9ba6b&type=album",
    role: "admin",
    color: "#385F73",
    colorText: "#FFFFFF",
    online: true,
    activate: true,
    banStatus: false,
    privateParams: {
      bd: true,
      files: true,
      statistic: true
    }
  },
  users: [
    {
      id: 1,
      name: "User",
      secondName: "User",
      bd: '2022-11-12',
      phone: '',
      email: '',
      password: '',
      img: "https://sun9-15.userapi.com/impg/e1110XwyyoTeM4dbUt2LR9eqDErVL5LoaZEoMQ/11YQkgI9-mw.jpg?size=563x782&quality=95&sign=4d04e094319a8cef739927711af9ba6b&type=album",
      background: "https://sun9-15.userapi.com/impg/e1110XwyyoTeM4dbUt2LR9eqDErVL5LoaZEoMQ/11YQkgI9-mw.jpg?size=563x782&quality=95&sign=4d04e094319a8cef739927711af9ba6b&type=album",
      role: "admin",
      color: "#385F73",
      colorText: "#FFFFFF",
      online: true,
      activate: true,
      banStatus: false,
      privateParams: {
        bd: true,
        files: true,
        statistic: true
      }
    },
    {
      id: 2,
      name: 'Петр',
      secondName: 'Петров',
      bd: '2022-11-12',
      role: 'user',
      online: true,
      activate: true,
      banStatus: false,
      phone: '',
      email: '',
      password: '',
      img: "https://sun9-15.userapi.com/impg/e1110XwyyoTeM4dbUt2LR9eqDErVL5LoaZEoMQ/11YQkgI9-mw.jpg?size=563x782&quality=95&sign=4d04e094319a8cef739927711af9ba6b&type=album",
      background: "https://sun9-15.userapi.com/impg/e1110XwyyoTeM4dbUt2LR9eqDErVL5LoaZEoMQ/11YQkgI9-mw.jpg?size=563x782&quality=95&sign=4d04e094319a8cef739927711af9ba6b&type=album",
      color: "#ffffff",
      colorText: "#333333",
      privateParams: {
        bd: true,
        files: true,
        statistic: false
      }
    },
    {
      id: 3,
      name: 'Андрей',
      secondName: 'Смирнов',
      bd: '2002-11-12',
      role: 'user',
      online: true,
      activate: true,
      banStatus: true,
      phone: '',
      email: '',
      password: '',
      img: "https://sun9-15.userapi.com/impg/e1110XwyyoTeM4dbUt2LR9eqDErVL5LoaZEoMQ/11YQkgI9-mw.jpg?size=563x782&quality=95&sign=4d04e094319a8cef739927711af9ba6b&type=album",
      background: "https://sun9-15.userapi.com/impg/e1110XwyyoTeM4dbUt2LR9eqDErVL5LoaZEoMQ/11YQkgI9-mw.jpg?size=563x782&quality=95&sign=4d04e094319a8cef739927711af9ba6b&type=album",
      color: "#ffffff",
      colorText: "#333333",
      privateParams: {
        bd: true,
        files: false,
        statistic: true
      }
    },
    {
      id: 4,
      name: 'Иван',
      secondName: 'Иванов',
      bd: '2009-11-12',
      role: 'user',
      online: false,
      activate: true,
      banStatus: false,
      phone: '',
      email: '',
      password: '',
      img: "https://sun9-15.userapi.com/impg/e1110XwyyoTeM4dbUt2LR9eqDErVL5LoaZEoMQ/11YQkgI9-mw.jpg?size=563x782&quality=95&sign=4d04e094319a8cef739927711af9ba6b&type=album",
      background: "https://sun9-15.userapi.com/impg/e1110XwyyoTeM4dbUt2LR9eqDErVL5LoaZEoMQ/11YQkgI9-mw.jpg?size=563x782&quality=95&sign=4d04e094319a8cef739927711af9ba6b&type=album",
      color: "#ffffff",
      colorText: "#333333",
      privateParams: {
        bd: true,
        files: false,
        statistic: false
      }
    }
  ]
})

export const getters = {
  getCurrentUser (state: any) {
    return state.user
  }
}

export const mutations = {
  change (state: any, value: any) {
    state.user.name = value.name
    state.user.secondName = value.secondName
    state.user.img = value.img
    state.user.background = value.background
    state.user.color = value.color
    state.user.colorText = value.colorText
  },

  addAlert (state:any, model:any) {
    state.alerts.push({
      ...model,
    })
  },

  removeAlert (state:any, item:any) {
    state.alerts.splice(state.alerts.indexOf(item), 1)
  },
}

export const actions = {

}
