let app = new Vue({
  el: '#app',
  data:{
    tokencek: localStorage.getItem('token'),
    plant: '',
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
      axios.post(`http://35.197.139.121:3000/user/login`,{
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
      axios.post(`http://35.197.139.121:3000/user`,{
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
    },
    buattodo () {
      this.plan = this.$refs.plant.value;
      this.status = false;
      // this.id = localStorage.getItem('token')
      axios.post(`http://35.197.139.121:3000/todo`,{
        plan: this.plan,
        status: this.status,
      })
      .then(get => {
        // window.location.push("/todo.html")
        this.panggil()
      })
    },
    panggil () {
      axios.get('http://35.197.139.121:3000/todo',{
        headers:{
          token:localStorage.getItem('token')
        }
      })
      .then((response) => {
        this.todo = response.data
        // console.log(JSON.stringify(this.todo));
      })
    },
    rubahstatustrue (id) {
      this.plan = id.plan
      this.status = false;
      axios.put('http://35.197.139.121:3000/todo/' + id._id,{
        plan: this.plan,
        status: false
      })
      .then(get => {
        // window.location.replace("/todo.html")
        this.panggil()
      })
    },
    rubahstatusfalse (id) {
      this.plan = id.plan
      this.status = true;
      axios.put('http://35.197.139.121:3000/todo/' + id._id,{
        // plan: this.plan,
        plan: this.plan,
        status: true
      })
      .then(get => {
        // window.location.replace("/todo.html")
        this.panggil()
      })
    },
    hapus (id) {
      axios.delete('http://35.197.139.121:3000/todo/' + id._id,{
        // plan: this.plan,
        plan: this.plan,
        status: true
      })
      .then(get => {
        this.panggil()
        // window.location.replace("/todo.html")
      })
    }
  },
  created(){
    axios.get('http://35.197.139.121:3000/todo',{
      headers:{
        token:localStorage.getItem('token')
      }
    })
    .then((response) => {
      this.todo = response.data
      // console.log(JSON.stringify(this.todo));
    })

  },
  watch: {
    todo: function (isi) {

    }
  }
})
