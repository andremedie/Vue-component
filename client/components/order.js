const OrderComponent = {

    props: ['item'],

    template: `
    <div>
    <p>{{item.name}} - {{item.artnr}} - {{item.amount}} st</p>
    
    </div>
    `
    
}