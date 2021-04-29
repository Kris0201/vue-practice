//console.log('hello, Vue')
//vue可省略分號

//const app=Vue.createApp({})必須為物件

const app = Vue.createApp({
    //建立function後, return一個物件
    data() {
        return {
            url:'https://www.cwb.gov.tw/V8/C/W/County/County.html?CID=63',
            showBooks: true,
            books: [
                { title: 'Kingdom of Sand', author: 'Kris', img: 'img/1.jpg' },
                { title: 'The Secret of the Wizard', author: 'Kris', img: 'img/2.jpg' },
                { title: 'Broken Soul', author: 'Kris', img: 'img/3.jpg' },
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

