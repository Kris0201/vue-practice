//console.log('hello, Vue')
//vue可省略分號

//const app=Vue.createApp({})必須為物件

const app = Vue.createApp({

    data() {
        return {
            url: 'https://www.cwb.gov.tw/V8/C/W/County/County.html?CID=63',
            showBooks: true,
            books: [
                //動態class綁定
                { title: 'Kingdom of Sand', author: 'Kris', img: 'img/1.jpg', isFav: true },
                { title: 'The Secret of the Wizard', author: 'Kris', img: 'img/2.jpg', isFav: false },
                { title: 'Broken Soul', author: 'Kris', img: 'img/3.jpg', isFav: true },
            ]
        }
    },

    methods: {
        //點一下就展開，再點一次收合
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },

        //點一下就加入最愛，再點一次移除
        add2Fav(book) {
            book.isFav = !book.isFav
        }

        //原本寫的
        /*add2Fav() {
            this.isFav = !this.isFav
        }為什麼這樣寫沒反應？*/
    },

    computed: {
        //濾除非最愛的項目
        filteredBooks() {
            return this.books.filter((book)=>book.isFav)
        }
        //針對books物件做filter，filter條件是判斷book.isFav的結果是否為true，若為false就被濾除
        
        //computed與methods的差別在於(1)不能帶入參數，(2)要有return回傳，(3)computed的property是依附於data之上，當data改變，computed才會跟著變動，因此如果值不是在data內(不屬於 this )，更動它是沒有用的。
    }




})


app.mount('#app')



