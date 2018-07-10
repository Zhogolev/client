import LinkTable from '@/components/pages/links/link-table/index'
import axios from '@/services/api';

export default {
  name: 'links',

  components: {
    LinkTable
  },
  props: [],
  data: function () {
    return {
      linksArray: [],
      showModal: false
    }
  },
  created: function () {
    this.init();
  },
  computed: {},
  mounted() {

  },
  methods: {
    init: function () {
      this.loadLinks();
    },
    loadLinks: function () {

      axios().get('/links').then((res) => {

        this.linksArray = res.data ? res.data : [];

      }, (response) => {
        this.linksArray = [];
      });

    }
  }
}
