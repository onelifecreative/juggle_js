var storeFn = {

    cacheFn  : {},
        add  : function(fn){     
	        if (fn.name && !storeFn.cacheFn[fn.name]) {
	 			storeFn.cacheFn[fn.name] = fn;	
	        } else {
	        	console.log( "Add name to fn()!! || The fn[name]() is exist!");
	        }
    }
};
