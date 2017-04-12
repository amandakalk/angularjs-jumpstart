(function() {
	var app = angular.module('dogListings', []);

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

				this.getUserRating = function(dog) {
					var total = 0;

					for (var i = 0; i < dog.userRatings.length; i++) {
						total += parseInt(dog.userRatings[i].rating);
					}

					total = total/dog.userRatings.length;

					return total;
				};
			}],
			controllerAs: 'dogListingsCtrl'
		};
	});
})();