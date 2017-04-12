(function() {
	var app = angular.module('dogApp', []);

	app.controller('TabController', function() {
		this.tab = 1;

		this.setTab = function(index) {
			this.tab = index;
		};

		this.getTab = function(index) {
			return this.tab === index;
		};
	});

	app.directive('reviewForm', function() {
		return {
			restrict: 'E',
			templateUrl: 'review.template.html',
			controller: function() {
				this.review = {};
				this.isSubmitted = false;

				this.addReview = function(dog) {
					dog.userRatings.push(this.review);
					this.isSubmitted = true;
				};
			},
			controllerAs: 'reviewFormCtrl'
		};
	});

	app.directive('dogListings', function() {
		return {
			restrict: 'E',
			templateUrl: 'dog-listings.template.html',
			controller: ['$http', function($http) {
				var dogCtrl = this;

				$http.get('/dogs.json').then(function(response) {
					dogCtrl.dogs = response.data.dogs;
				});
			}],
			controllerAs: 'dogListingsCtrl'
		};
	});

})();