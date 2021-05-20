'use strict';
let app = Vue.createApp({
    data(){
        return {
            title: "Подробнее о статье",
            book: {
                title: "vue js",
                author: "junior developer",
                otherAuthors: ["junior1", "junior2"],
                img: "https://picsum.photos/200/300"
            }
        };
    }
});

// фильтры (методы) для распространенных задач 
// (будут доступны всем компонентам vue)
app.config.globalProperties.$customFilters = {
    firstToUpper(word){
        if (!word) return "",
        word = word.toString().toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
};

let vm = app.mount("#app")