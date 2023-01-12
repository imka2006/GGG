import { createStore } from 'vuex'

export default createStore({
  state: {
    partners:[
      "/img//partners/img-1.svg",
      "/img//partners/img-2.svg",
      "/img//partners/img-3.svg",
      "/img//partners/img-4.svg",
      "/img//partners/img-5.svg",
    ],
    services:[
      {
        id:0,
        title:"Обучение",
        img:"/img/services/head.svg",
        text:"За короткое время своей деятельности Ассоциация уже внесла весомый вклад в становление социального предпринимательства в Кыргызстане. ",
      },
      {
        id:1,
        title:"Менторство",
        img:"/img/services/head-2.svg",
        text:"За короткое время своей деятельности Ассоциация уже внесла весомый вклад в становление социального предпринимательства в Кыргызстане. ",
      },
      {
        id:2,
        title:"Бизнес аналитика",
        img:"/img/services/line.svg",
        text:"За короткое время своей деятельности Ассоциация уже внесла весомый вклад в становление социального предпринимательства в Кыргызстане. ",
      },
      {
        id:3,
        title:"Планирование",
        img:"/img/services/note.svg",
        text:"За короткое время своей деятельности Ассоциация уже внесла весомый вклад в становление социального предпринимательства в Кыргызстане. ",
      },
      {
        id:4,
        title:"Менторство",
        img:"/img/services/head-last.svg",
        text:"За короткое время своей деятельности Ассоциация уже внесла весомый вклад в становление социального предпринимательства в Кыргызстане. ",
      },
    ],
    invesment:[
      {
        id:0,
        title:"Запущенных предприятий",
        number:37,
        img:"/img/invesment/img-1.svg",
      },
      {
        id:1,
        title:"Человек",
        number:2000,
        img:"/img/invesment/img-2.svg",
      },
      {
        id:2,
        title:"Человек обучено",
        number:120,
        img:"/img/invesment/img-3.svg",
      },
      {
        id:3,
        title:"Открыли предприятия",
        number:200,
        img:"/img/invesment/img-4.svg",
      },
    ],
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
