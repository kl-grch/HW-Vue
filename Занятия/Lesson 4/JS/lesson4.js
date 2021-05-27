'use strict';
// локальная регистрация компонентов

let TabDrinks = {
    template: `<div>
    <h2>Содержимое вкладки {{title}}</h2>
    </div>`,
    // любой родительский компонент может передать данные в дочерний компонент
    props: ["title"]
};

let TabDeserts = {
    template: `<div>
    <h2>Содержимое вкладки {{title}}</h2>
    </div>`,
    props: {title: String} // Number, Array, Object, Function ..
};

let TabSalads = {
    template: `<div>
    <h2>Содержимое вкладки {{title}}</h2>
    </div>`,
    props: {
        title: {
            required: false,
            default: "Салаты",
            validator(titleValue){
                return titleValue.length > 3;
            }
        }
    }
};

let app = Vue.createApp({
    data(){
        return{
            tabs:[
                {name: "Напитки", en: "drinks"},
                {name: "Десерты", en: "deserts"},
                {name: "Салаты", en: "salads"},
            ],
            currentTab: {name: "Напитки", en: "drinks"}
        }
    },
    // локальная регистрация компонентов
    components: {TabDeserts, TabDrinks, TabSalads},
    computed: {
        tabName(){
            return `tab-${this.currentTab.en}`; // tab-drinks
        }
    }
});

// // глобальная регистрация компонентов
// app.component("tab-drinks", {
//     template: `<div>
//     <h2>Содержимое вкладки напитки</h2>
//     </div>`
// });

// app.component('tab-deserts', {
//     template: `<div>
//     <h2>Содержимое вкладки десерты</h2>
//     </div>`
// }); // tabDeserts

// app.component('tab-salads', {
//     template: `<div>
//     <h2>Содержимое вкладки салаты</h2>
//     </div>`
// }); // TabSalad

app.mount("#app");