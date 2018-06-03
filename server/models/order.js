module.exports = mongoose.model('Order', new mongoose.Schema(
    {
    name: {type: String, required: true},
    artnr: String,
    amount: Number


}
));