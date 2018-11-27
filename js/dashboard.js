var data = {
  username: ""
}

const app = new Vue({
  el: '#app',
  data: data,
  methods: {
    getDataFromUser: function(){
      let url = document.location.href;
      let parseUrl = new URL(url);
      let username = parseUrl.searchParams.get('user');
      this.username = username;
      console.log(username)
    }
  },
  beforeMount() {
    this.getDataFromUser();
  },
})