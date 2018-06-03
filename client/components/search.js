const SearchComponent = {

    template: `
        <div>  
        <input type="text" v-model="search" placeholder="sök" />
          <div class="row">
          <product
            v-for="product in filteredProducts"
            v-bind:item="product"
            v-bind:key="product._id"
          ></product>
          </div>
        </div>
    `,
  
    data() {
      return {
        products: []
      }
    },
  
    created() {
      http.get('/rest/products').then((response) => {
        this.products = response.data;
      }).catch((error) => {
        console.error(error);
      })
    },
  
  computed: {
    filteredProducts: function() {
        return this.products.filter((product) => {
          return product.name.match(this.search)
        });
    }
  }
  
  
  
  
  }