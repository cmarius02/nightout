var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;
 
var Places = new Schema({
	name:            String,
	clients:         Number
});

var Menus = new Schema({
	list:           [Food]
});

var Food = new Schema({
	name:           String,
  price:          Number
});
 
mongoose.model( 'Places', Places );
mongoose.model( 'Menus', Menus );
mongoose.model( 'Food', Food );
 
mongoose.connect('mongodb://marius:marius@troup.mongohq.com:10014/Nightout' );
