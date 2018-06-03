const ProductPageComponent = {

  props:["slice"],

  template: `
    
  <div>  
  <input type="text" v-model="search" placeholder="sök" />
    <div class="row">
    <product
      v-for="product in categoryFilterProducts"
      v-bind:item="product"
      v-bind:key="product._id"
    ></product>
    </div>
  </div>
  `,

  created() {
     // ladda in litta data
     http.get('/rest/products/').then(response => {
      console.log('products', response.data)
      this.products = response.data;
    }).catch(e => {
      console.error(e);
    });

  },

  data() {
    return {
      products: [],
      search: ''
    }
  },

  computed: {
    filteredProducts: function() {
      return this.products.filter((product) => {
        return product.name.match(this.search)
      });
    },
    categoryFilterProducts: function(){
      return this.filteredProducts.filter((product)=>{
        if(!this.$route.params.category){
          return true;
        }
        for(let category of product.categories){
          if(category.name == this.$route.params.category){
            return true;
          }
        }
      })
    }
  }
}
