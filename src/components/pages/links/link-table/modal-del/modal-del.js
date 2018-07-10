export default {
  name: 'modal-del',
  components: {},
  props: [],
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    close: function() {
      this.$emit('close');
    },
    deleteEL: function () {
      this.close();
      this.$emit('delete-element');
    }
  }
}
