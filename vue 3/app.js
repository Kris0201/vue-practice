//console.log('hello, Vue')
//vue可省略分號

//const app=Vue.createApp({})必須為物件

const app=Vue.createApp({
    //data, function...
     
    //template:'<h2>I am template</h2>' 
     //template後接字串

    //建立function後, return一個物件
    data(){
        return {
            title:'My Blog',
            user:'Kris',
            times: '5'
        }
    },

    methods:{
        changeUser(user){
            this.user=user
            
            //事件中帶入參數
        }
    }

    //methods:{
    //     changeUser(){
    //         //this.user='Leo'
    //         //this指向此component：data內的都是
    //     }
    // }
})


app.mount('#app')
//app.mount('#app')表示將效果掛載到#app上,而vue的效果將作用在此dom範圍
//將DOM掛載到#app這個位址, 並插入h2到#app中

