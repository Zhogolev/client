export default {
  name: 'change',
  components: {},
  props: {
     link: {
       type: Object
     }
  },
  data () {
    return {
      nlink : {
        _id:"",
        url:"",
        start:"",
        expiration: ""
      }
    }
  },
  computed: {

  },

  mounted () {

   this.nlink = {
     _id: this.link._id,
     url: this.link.url,
     start: this.link.start,
     expiration: this.link.expiration
   }
  },
  methods: {
    close: function() {
      this.$emit('close');
    },
    changeElement: function () {
      this.close();
      this.$emit('change-element',{
        _id: this.nlink._id,
        url: this.nlink.url,
        start: this.nlink.start,
        expiration: this.nlink.expiration
      });
    }
  }
}
