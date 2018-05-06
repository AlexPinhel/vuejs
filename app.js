new Vue({
    el: '#app',
    data: {
        title: 'Hello Ninja !',
        name: 'Bob'
    },
    methods: {
        greet(time){
            return 'hello and good '+ time + ', ' + this.name
        },
        sum(a, b){
            total = a + b    
            return total
        }
    }
})