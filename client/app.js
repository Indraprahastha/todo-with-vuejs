let app = new Vue({
  el: '#app',
  data:{
    sapaan: 'Silakan Login',
    username: '',
    password: '',
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
        localStorage.setItem('token',get.data)
        this.$router.link('/todo')
        // let aman = localStorage.getItem('token')
        // console.log(aman)
      })
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
      }
    )
  },
})
