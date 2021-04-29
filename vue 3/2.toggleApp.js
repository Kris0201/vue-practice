//console.log('hello, Vue')
//vue可省略分號

//const app=Vue.createApp({})必須為物件

const app=Vue.createApp({
    //建立function後, return一個物件
    data(){
        return {
            title:'My Blog',
            user:'Kris',
            times: '5',
            showInfo: true,
            color: 'hotpink'
        }
    },

    methods:{
        toggleShowInfo(){
            this.showInfo=!this.showInfo
            //this.showInfo=false
            /*toggleShowInfo中的this.showInfo等號右邊的值,會被設定回data中的showInfo的值,因此若!this.showInfo結果為false, 即this.showInfo=false, <p>不顯示, 若!this.showInfo結果為true, 即this.showInfo=true, <p>顯示*/
        }
    }

    
})


app.mount('#app')

