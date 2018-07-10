export default {
  name: 'modal-create',
  components: {},
  props: [],
  data() {
    return {
      nlink: {
        name: "",
        email: "",
        password: ""
      }
    }
  },
  computed: {
    canCreate: function () {

      return this.nlink.name && this.nlink.email && this.nlink.password;
    }
  },

  mounted() {

  },
  methods: {
    close: function () {
      this.$emit('close');
    },
    createLink: function () {
      this.close();
      this.$emit('create-element', {
        name: this.nlink.name,
        email: this.nlink.email,
        password: this.nlink.password
      });
    }
  }
}
