import ModalDel from '@/components/pages/links/link-table/modal-del/index'
import Change from '@/components/pages/links/link-table/modal-chng/index'
import ModalCreate from '@/components/pages/links/link-table/modal-create/index'


import axios from '@/services/api';

export default {
  name: 'link-table',
  components: {
    Change, ModalDel, ModalCreate
  },
  props: {
    links: {
      type: Array,
      default: function () {
        return [];
      }
    }
  },
  data() {
    return {
      showDelete: false,
      UpdateShow: false,
      currentItem: null,
      showCreate: false
    }
  },
  computed: {},
  mounted() {

  },
  methods: {
    preShowUpdate: function (item) {
      this.changeCurrentItem(item);
      this.UpdateShow = !this.UpdateShow;
    },
    deleteElement: function () {

      if (this.currentItem !== null) {
        const idItem = this.links[this.currentItem]._id;

        axios().delete('links', {data: {id: idItem}})
          .then(response => {
            if (response.status === 200) {
              this.links.splice(this.currentItem, 1);
              console.log('successful deleted link ' + idItem);
            }
            else
              console.log('server: Delete links error');
          }).catch(err => console.log(err.message));
      }

    },
    preDeleteLink: function (item) {
      this.changeCurrentItem(item);
      this.showDelete = true;
    },
    preCreateLink: function () {
      //this.changeCurrentItem(item);
      this.showCreate = true;
    },
    changeCurrentItem: function (item) {
      this.currentItem = item;
    },
    changeElement: function (data) {
      const cur = this.currentItem;
      axios().put('links', {data:  data}).then(res => {
        if (res.status === 200){
          //this links is observable
          //so we cant just to say
          //this.links[cur].url = data;
          //coz data.prototype is Object not observable
          this.links[cur].url = data.url;
          this.links[cur].start = data.start;
          this.links[cur].expiration = data.expiration;
          }
        else console.log('err');
      })
        .catch(err => console.log(err.message));
    },
    createElement: function (data) {
      axios().post('links', {data:  data}).then(res => {
        if (res.status === 200){
          //this links is observable
          //so we cant just to say
          //this.links[cur].url = data;
          //coz data.prototype is Object not observable

          this.links.push(res.data);
        }
        else console.log('err');
      })
        .catch(err => console.log(err.message));
    }
  }
}
