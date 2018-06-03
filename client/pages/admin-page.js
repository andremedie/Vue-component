const AdminPageComponent = {

  template: `
  <div>
    <h1 class="col-12"></h1>
    <product-admin class="col-12"></product-admin>
    <h3>Orderlistan</h3>
    <h5>Produktnamn-artnr-antal</h5>
    <order
    v-for="order in orders"
    v-bind:item="order"
    v-bind:key="order._id"
    ></order>
    <category-admin class="col-12"></category-admin>
  </div>
  `,
  created() {
    http.get('/rest/orders').then((response)=> {
      this.orders = response.data; 
    }).catch((error) => {
      console.log(error);
    });
  },
  data() {
    return {
      orders: []
    }
  }
}