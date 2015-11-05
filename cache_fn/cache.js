
/**
  * param {Object} storeFn
  * method storeFn.add
  * if @param { function.name } exist return 
  */

var storeFn = {
    cacheFn  : {},
        add  : function(fn){     
	        if (fn.name && !storeFn.cacheFn[fn.name]) {
	 			storeFn.cacheFn[fn.name] = fn;	
	        } else {
	        	console.info( "Add name to fn()!! || The fn[name]() is exist!");
	        	return alert("The fn[name]() is exist!");
	        }
    }
};
