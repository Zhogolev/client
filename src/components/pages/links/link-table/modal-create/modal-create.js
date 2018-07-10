export default {
  name: 'modal-create',
  components: {},
  props: [],
  data() {
    return {
      nlink: {
        _id: "",
        url: "",
        start: "",
        expiration: "",
        owner: "",
      }
    }
  },
  computed: {
    canCreate: function () {

      return this.nlink.owner && this.nlink.url;
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
      console.log(this.nlink.start);

      this.$emit('create-element', {
        url: this.nlink.url,
        start: this.nlink.start,
        expiration: this.nlink.expiration,
        owner: this.nlink.owner
      });
    },
    fullfiled: function () {
      return !this.nLink.url.isEmpty() && !this.nLink.owner.isEmpty();
    }
  }
}
