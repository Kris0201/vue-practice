//console.log('hello, Vue')
//vue可省略分號

//const app=Vue.createApp({})必須為物件

const app = Vue.createApp({
    //建立function後, return一個物件
    data() {
        return {
            title: 'My Blog',
            user: 'Kris',
            times: '5',
            showInfo: true,
            color: 'hotpink',
            x: 0,
            y: 0
        }
    },

    methods: {
        toggleShowInfo() {
            this.showInfo = !this.showInfo
            //this.showInfo=false
        },

        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
            //在handleEvent()中, 若有兩個參數, 第一個參數一定要是event,因此在html中帶入的兩個參數也要對應js檔的順序, 並以($event,參數2)的方式寫入;若沒有帶入任何參數,則預設event為第一個參數
        },


        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
            //這邊的offsetX, offsetY會從綁定事件的div左上角為起始點開始計算滑鼠座標
        }
    }


})


app.mount('#app')

