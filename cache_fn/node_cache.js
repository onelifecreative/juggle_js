

/**
  * require( {{file}} )
  * var cache = require('./sortdata/node_cache.js')();
  * use: @param key { 'string' || 'number' }
  		 @param value { 'value','number','callback' }
  * 	
  * 	cache.set(@key,@value);
  */

module.exports = function(){
	cache = {};
	return {
		get : function(key){
			return cache[key];
		},
		set : function(key,value){
			cache[key] = value;
		}
	};	
};