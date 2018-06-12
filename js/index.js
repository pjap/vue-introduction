new Vue({
  el : '#app',
  data : {
    title : 'Hello World',
    text: 'Data Berubah',
    link : 'http://google.com',
    finishedLink : '<a href="http://google.com" target="_blank">Click Me!</a>',
    counter : 0,
    x : 0,
    y : 0
  },
  methods: {
    changeTitle(event) {
      this.text = event.target.value;
    },
    sayHello() {
      this.title = 'Hello Ajah'
      return this.title + '!!!!!'
    },
    increase(num) {
      this.counter = this.counter + num;
    },
    decrease() {
      this.counter = 0;
    },
    updateCoordinates(event) {
      this.x = event.clientX
      this.y = event.clientY
    },
    donothing(event) {
      event.stopPropagation()
    },
    alertMe() {
      alert('Warning Alert!')
    }
  }
})
