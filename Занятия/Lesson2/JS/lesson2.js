'use strict';

let books =  [
    {
        title: "Колобок",
        description: "Сказка, знакомая каждому взрослому, придется по душе и маленьким детям. " +
            "Они быстро учат простые слова песенки Колобка и с удовольствием подпевают родителям.",
        img: "https://novorab.ru/wp-content/uploads/2020/07/screenshot_3-4.jpg",
        inList: false,
    },
    {
        title: "Репка",
        description: "Репка — русская народная сказка, которая знакома каждому ребенку с малых лет. " +
            "«Репка» имеет цепочные действия, ясные даже малышу, поэтому можно читать сказку с раннего возраста.",
        img: "https://web-skazki.ru/preview-files/repka-x-768.jpg",
        inList: false,
    },
    {
        title: "Три медведя",
        description: "Народная сказка с английскими корнями, знакомая каждая ребёнку с детства. " +
            "В ней говорится о приключениях девочки, которая пошла в лес, заблудилась и набрела на дом трёх медведей.",
        img: "https://deti-skazki.ru/wp-content/uploads/2019/10/tri-medvedya-russkaya-narodnaya-skazka.jpg",
        inList: false,
    },
    {
        title: "Красная шапочка",
        description: "В ней показана жизнь простой девочки, Красной Шапочки. " +
            "Однажды ее бабушка заболела, и внучка отправилась ее навестить по наказу матери.",
        img: "https://porgi.ru/wp-content/uploads/2020/03/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%B0%D1%8F-%D1%88%D0%B0%D0%BF%D0%BE%D1%87%D0%BA%D0%B0-%D0%B8-%D0%A1%D0%B5%D1%80%D1%8B%D0%B9-%D0%B2%D0%BE%D0%BB%D0%BA.jpg",
        inList: false,
    },
];

let app = Vue.createApp({
    data(){
        return{
            tabs: ["Все книги", "Мой список"],
            currentTab: "Все книги",
            allBooks: books,
            myList: []
        }
    },
    computed: {
        sortedMyList(){
            return this.myList.sort((b1, b2)=>{
                return  b2.date.getTime() - b1.date.getTime();
            });
        }
    },
    methods: {
        addToMyList(book){
            book.inList = true;
            book.date = new Date();
            this.myList.push(book);
        },
        deleteFromMyList(book, i){
            book.inList = false;
            this.myList.splice(i, 1);
        }
    }
});
app.mount("#app");