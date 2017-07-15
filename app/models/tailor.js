var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var openingTimeSchema = new Schema({
	days: {type: String},
	opening: String, 
	closing: String, 
	closed: {type: Boolean, default:false} 
});

var priceSchema = new Schema({
	normal_price: Number,
	discountedPrice: Number,
	isDiscount : {type: Boolean, default:false}
})

var productSchema = new Schema({
	name: String,
	description: String,
	image_url: String,
	price:[priceSchema],
})

var tailorSchema = new Schema({
	name: String,
	address: String,
	openingTimes: [openingTimeSchema],
	products: [productSchema],
	speciality: String
	
})
module.exports = mongoose.model('Tailor', tailorSchema);