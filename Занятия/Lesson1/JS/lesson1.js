'use strict';
// создание экземпляра Vue
let app = Vue.createApp({
    data(){
        return {
            userInput: ""
        }
    },
    // вычисляемые свойства
    computed: {
        // имя метода придумываем сами
        userOutput(){
            return this.userInput.length < 1 ? "Вы ничего не ввели" : this.userInput;
        },
        userHtmlOutput(){
            return `<strong>${this.userInput.length < 1 ? "Вы ничего не ввели" : this.userInput}</strong>`
        }
    }
});

// id="app"
let vm = app.mount("#app");