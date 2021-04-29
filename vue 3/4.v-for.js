//console.log('hello, Vue')
//vue可省略分號

//const app=Vue.createApp({})必須為物件

const app = Vue.createApp({
    //建立function後, return一個物件
    data() {
        return {
            showBooks: true,
            books: [
                { title: 'Kindom of Sand', author: 'Kris' },
                { title: 'The Secret of the Wizard', author: 'Kris' },
                { title: 'Broken Soul', author: 'Kris' },
            ]
        }
    },

    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }




})


app.mount('#app')

