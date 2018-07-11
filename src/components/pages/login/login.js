import axios from '@/services/api'

export default {
  name: 'login',
  components: {},
  props: [],
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    loggin : function () {
      axios().post('/login', {
        email: this.email,
        password: this.password
      }).then(res => {
        if(res.status === 200){
          console.log(res);
          this.$router.push('/links');
        }
      }).catch(err => console.log('bad auth')
      );
    },
    close: function () {

      console.log('close btn');

    }
  }
}
