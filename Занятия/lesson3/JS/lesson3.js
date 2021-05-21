'use strict';

Vue.createApp(
    {
        data(){
            return{
                companies: [
                    {id: 1, name: "Custom Line"},
                    {id: 2, name: "Riva"},
                    {id: 3, name: "Ferretti"},
                ],
                formData: {
                    user: "",
                    email: "",
                    phone: "",
                    companies: [2],
                    price: 10000,
                    count: 1,
                    comment: "",
                    contacts: ["sms"],
                    agree: true,
                },
            }
        },
        methods: {
            addRequest(event){
                event.target.reset();
                console.log(this.formData);
            }
        }
    }
).mount("#app");