import Vue from 'vue'
declare module 'vue/types/vue' {
  interface Vue {
    $rest: Rest
  }
}

class Rest {
  /**Служебные**/
    // Переводим дату в человеческий формат
  public getDate = (date:string) => {
      // Принимает формат ISO
    const DATE = new Date (Date.parse(date))

    const DAY = DATE.getDate()
    const MONTH = DATE.getMonth()
    const YEAR = DATE.getFullYear()

    const MONTH_ARR=[
      'Янв', 'Фев',
      'Мар', 'Апр',
      'Мая', 'Июн',
      'Июл', 'Авг',
      'Сен', 'Окт',
      'Ноя', 'Дек',
    ];
      // возращаем строку по типу: 29 Дек 2022
    return DAY + ' ' + MONTH_ARR[MONTH-1] + ' ' + YEAR
  }

}

const rest = new Rest()
Vue.prototype.$rest = rest
