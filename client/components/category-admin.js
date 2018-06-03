const CategoryAdminComponent = {
    template: `
      <div>
        <h3>Lägga till kategorier</h3>
        <form @submit.prevent="submit">
          <label style="margin-right:10px;">Name
            <input type="text" v-model="name" :disabled="loading" required />
          </label>
          <br/>
          <button type="submit" :disabled="loading">Spara</button>
          <br/>
          <span v-if="message">{{message}}</span>
        </form>
      </div>
    `,
    data() {
      return {
        name: '',
        message:'',
        loading: false
      };
    },
    methods: {
      submit() { // save a product
        this.loading = true;
        http.post('/rest/categories', {
            name: this.name
        }).then(response => {
          console.log(response);
          this.loading = false;
          if(response.data.name) {
            this.message = 'category saved';
          } else {
            this.message = 'save failed';
          }
        }).catch(error => {
          this.loading = false;
          this.message = 'save failed';
        });
      }
    },
    
    
  }