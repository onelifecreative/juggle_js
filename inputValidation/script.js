(function(window, document){

	var obj = function() {

		var $ = document,
			validItem = $.addEventListener("click",function(e) {

			if (e.srcElement.localName === 'input') {
				obj._init(e);
			} else {
				return false;
			}
		
		},false);
		
		return {

			_init : function(e){
					e.target.onblur = this._isNotEmpty;		
			},
			_isNotEmpty: function(e){
				var el = e.target;
				
				if (el.value === "") {
					$.getElementById("i"+ el.id).innerHTML = "This value is empty!";
					el.className = "blad";
				} else {
				   $.getElementById("i"+ el.id).innerHTML = "";
				   el.className = "";
				}
			}
		};
		
	}();
}(window, document));
