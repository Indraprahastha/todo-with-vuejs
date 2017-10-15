let app = new Vue({
  el: '#app',
  data:{
    tokencek: localStorage.getItem('token'),
    sapaan: 'Silakan Login',
    sapaanDaftar: 'Silakan Daftar untuk membuat Akun',
    username: '',
    password: '',
    email: '',
    todo: [],
  },
  methods:{
    proses (){
      this.username = this.$refs.username.value;
      this.password = this.$refs.password.value;
      axios.post(`http://localhost:3005/user/login`,{
        username:this.username,
        password:this.password
      })
      .then(get => {
        if (get.data == 'Fail') {
          window.location.replace("/")
        }else{
          localStorage.setItem('token',get.data)
          window.location.replace("/todo.html")
        }
      })
    },
    logout () {
      localStorage.clear();
      window.location.replace("/")
    },
    daftar (){
      this.username = this.$refs.username.value;
      this.password = this.$refs.password.value;
      this.email = this.$refs.email.value;
      axios.post(`http://localhost:3005/user`,{
        username:this.username,
        password:this.password,
        email:this.email
      })
      .then(get => {
        window.location.replace("/")
      })
    },
    daftardirect () {
      window.location.replace("/daftar.html")
    }
  },
  created(){
    axios.get('http://localhost:3005/todo',{
      headers:{
        token:localStorage.getItem('token')
      }
    })
    .then((response) => {
      this.todo = response.data
      console.log(JSON.stringify(this.todo));
    })
  },
})
