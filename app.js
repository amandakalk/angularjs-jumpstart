(function() {
	var app = angular.module('dogApp', []);

	app.controller('DogAppController', function() {
		this.dog = {
			"name": "Kyle",
			"img": "//pbs.twimg.com/media/C8576jrW0AEYWFy.jpg",
			"description": "This is Kyle. He made a joke about your shoes, then stuck his tongue out at you. Uncalled for. Step the h*ck up Kyle. 11/10 would forgive",
			"weRating": 11,
			"owner": {
				"name": "#iamMEHAR",
				"twitter": "sardar_kutto_ka"
			}
		};
	});
})();