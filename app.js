(function() {
	var app = angular.module('dogApp', ['dogListings']);

	app.controller('TabController', function() {
		this.tab = 1;

		this.setTab = function(index) {
			this.tab = index;
		};

		this.getTab = function(index) {
			return this.tab === index;
		};
	});

})();