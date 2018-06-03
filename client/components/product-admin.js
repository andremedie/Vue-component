const ProductAdminComponent = {
    template: `
      <div class="card-body">
        <h2>Skapa en produkt</h2>
        <form @submit.prevent="submit">
          <label>Namn
            <input type="text" v-model="name" :disabled="loading" required />
          </label>
          <label>Beskrivning
            <input type="text" v-model="description" :disabled="loading" />
          </label>
          <label>Artikelnummer
            <input type="text" v-model="artnr" :disabled="loading" placeholder="exempelvis: abc123" />
          </label>
          <label>Pris
            <input type="text" v-model="price" :disabled="loading" />
          </label>
          <label>Moms
            <input type="text" v-model="vat" :disabled="loading" placeholder="0.25" />
          </label>
          <button type="submit" :disabled="loading">Spara Produkt</button>
          <br/>
          <span v-if="message">{{message}}</span>
        </form>
      </div>
    `,
    data() {
      return {
        name: '',
        description: '',
        price: 0,
        vat: 0.25,
        artnr: '',
        message: '',
        loading: false
      };
    },

    methods: {
      submit() { // save a product
        this.loading = true;
        http.post('/rest/products', { // Här gör vi samma sak som i Postman!
          name: this.name,
          description: this.description,
          price: this.price,
          vat: this.vat,
          artnr: this.artnr
        }).then(response => {
          console.log(response);
          this.loading = false;
          if(response.data.name) {
            this.message = 'Product saved';
          } else {
            this.message = 'Product Save failed';
          }
        }).catch(error => {
          this.loading = false;
          this.message = 'Failed registration';
        });
      }
    }
  }