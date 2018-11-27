var data = {
  contact: {
    name: "",
    email: "",
    subject: "",
    message: ""
  },
  inbox:[]
}

const app = new Vue({
  el: '#app',
  data: data,
  methods: {
    sendEmail: function () {
      this.$http.get('https://bireport-4aedd.firebaseio.com/posts.json', this.contact)
        .then(function (data) {
          console.log(data);
          this.inbox = data.body;
        })
    },

    sendMessage: function(email){
      
    }
  },
  beforeMount(){
    this.sendEmail();
  }
})