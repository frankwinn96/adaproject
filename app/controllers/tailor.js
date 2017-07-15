var Tailor = require('../models/tailor.js')

exports.postTailor = function(req, res){
	var tailor = new Tailor();
		tailor.name = req.body.name;
		tailor.address = req.body.address;
		var openingTimes = {
        	opening : req.body.opening,
        	closed: req.body.closed,
        	days: req.body.days	
        }
        tailor.openingTimes = [openingTimes];
        var productPrice = {
        	normal_price: req.body.normal_price,
			discountedPrice: req.body.discountedPrice,
			isDiscount : req.body.isDiscount
        }
        var tailorProduct = {
        	name: req.body.productname,
			description: req.body.productdescription,
			image_url: req.body.productimage_url,
			price: [productPrice]
        }
        tailor.product = [tailorProduct]
        tailor.speciality = req.body.speciality;
        tailor.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Tailor created!' });
        });
}

exports.getTailor = function(req,res){
	Tailor.find(function(err, tailors) {
            if (err)
                res.send(err);

            res.json(tailors);
        });
}