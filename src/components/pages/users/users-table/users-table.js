import axios from '@/services/api';
import ModalCreate from '@/components/pages/users/users-table/modal-create/index'
import ModalDel from '@/components/pages/users/users-table/modal-del/index'

export default {
  name: 'users-table',
  components: { ModalCreate,ModalDel},
  props: [],
  data() {
    return {
      links: [],
      showDelete: false,
      showUpdate: false,
      currentItem: null,
      showCreate: false
    }
  },
  computed: {}
  ,
  mounted() {

  },
  created: function () {
    this.initTable();
  }
  ,
  methods: {
    initTable: function(){
      axios().get('/users')
        .then((res) => {
          if(res.status === 200) {
            return this.links = res.data ? res.data : [];
          }
        }, (response) => {
        this.links = [];
      });
    },
    preDeleteLink: function (item) {
      this.changeCurrentItem(item);
      this.showDelete = true;
    },
    deleteElement: function () {
      if (this.currentItem !== null) {

        const id = this.links[this.currentItem]._id;
        const active = this.links[this.currentItem].isActive;

        axios().delete('users', {data: {id: id, isActive: !active}})
          .then(response => {
            if (response.status === 200) {
              this.links[this.currentItem].isActive = !active;

            }
            else
              console.log('server: Delete user error');
          }).catch(err => console.log(err.message));
      }
    },
    changeCurrentItem: function (item) {
      this.currentItem = item;
    },
    createElement: function(data){
      axios().post('users', {data:  data}).then(res => {
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
