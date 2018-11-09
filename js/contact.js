var data = {
  contact: {
    name:"",
    email:"",
    subject:"",
    message:""
  }
}

const app = new Vue({
  el: '#app',
  data: data,
  methods:{
    sendEmail: function(){
      window.open(`mailto:luis.6496@hotmail.com?subject=${this.contact.subject}&body=${this.contact.message}`);
    }
  }
})