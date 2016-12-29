(function($) {

	$.jqTree = $.jqTree || {};
	$.extend($.jqTree, {
		version : "0.0.1",
		defaults : {
			option1 : "value1",
			option2 : "value2"
		},
		methods : {
			init: function(options) {

				return this.each(function () {
					//this keyword refers to native DOM element			

					var $this = $(this),
						data = $this.data('jqTree');

					if (!data) {
						//jqTree plugin code here

						

						$(this).data('jqTree', {
							target: $this,
							settings: $.extend({}, $.jqTree.defaults, options)
						});
					}
					

				});

			},
			destroy: function() {

				return this.each(function() {

					var $this = $(this),
						data = $this.data('jqTree');

					$(window).unbind('.jqTree');

					data.jqTree.remove();
					$this.removeData('jqTree');

				});

			},
			show: function() {

			},
			hide: function() {

			},
			reposition: function() {
				console.log('repositioning');
			},
			update: function(content) {

			}
		}
	});

	$.fn.extend({
		jqTree : function(method, options) {
			//this keyword refers to the jQuery object the jqTree plugin was invoked on

			if ($.jqTree.methods[method]) {
				return $.jqTree.methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
			} else if (typeof method === 'object' || !method) {
				return $.jqTree.methods.init.apply(this, arguments);
			} else {
				$.error('Method ' + method + ' does not exist on jQuery.jqTree');
			}
			
		}
	});

})(jQuery);


//usage

// calls the init method
//$('div').jqTree({
//  option2 : 'newValue'
//});

// calls the init method
//$('div').jqTree(); 

// calls the hide method
//$('div').jqTree('hide'); 

// calls the update method
//$('div').jqTree('update', 'This is the new tooltip content!'); 