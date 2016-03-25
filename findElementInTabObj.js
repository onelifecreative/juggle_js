// Find and Update array or add New item!

var products = [{
	id:1,
	name:'Crochet Off-the-Shoulder Top',
	color:'White/Creame',
	price:'12.99$',
	code:'W27CBE163',
	quantity:8,
	item:1
},{
	id:2,
	name:'Distressed Denim Cutoffs',
	color:'Medium Denim/Light Denim',
	price:'16.99$',
	code:'2000123754',
	quantity:6,
	item:1
},{
	id:3,
	name:'Box Pleated Striped Dress',
	color:'Cream/Rust',
	price:'20.99$',
	code:'2000152316',
	quantity:3,
	item:1
}];



// Find element fn();

function update(item){
	if (products.length > 0) {
		
		var finded = false;

		// find element in tab, if exist update item++ !
		for(var i in products){
			if (products.hasOwnProperty(i)) {
				if (products[i].name === item.name) {
					finded = true;
					// element exist. update only item.
					products[i].item++;
				}
			}
		}
		// if element not exist update product tab!
		// hurray! we update products
		if (!finded) {
			products.push(item);
		}

	} else {
		products.push(item);
	}
}

	

